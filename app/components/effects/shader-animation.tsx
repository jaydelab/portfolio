import { useEffect, useRef } from "react";
import * as THREE from "three";

type ShaderUniforms = {
  time: { value: number };
  resolution: { value: THREE.Vector2 };
  radiusScale: { value: number };
};

type SceneRef = {
  animationId: number;
  renderer: THREE.WebGLRenderer;
  uniforms: ShaderUniforms;
};

type ShaderAnimationProps = {
  className?: string;
};

type ShaderPalette = {
  deep: readonly [number, number, number];
  mid: readonly [number, number, number];
  soft: readonly [number, number, number];
  glow: readonly [number, number, number];
};

export const SHADER_PALETTES = {
  blue: {
    deep: [0.06, 0.2, 1.6],
    mid: [0.12, 0.32, 1.08],
    soft: [0.3, 0.52, 1.0],
    glow: [0.04, 0.14, 0.72],
  },
  red: {
    deep: [1.6, 0.06, 0.08],
    mid: [1.08, 0.12, 0.14],
    soft: [1.0, 0.3, 0.28],
    glow: [0.72, 0.04, 0.06],
  },
  orange: {
    deep: [1.6, 0.5, 0.06],
    mid: [1.08, 0.38, 0.12],
    soft: [1.0, 0.55, 0.3],
    glow: [0.72, 0.28, 0.04],
  },
  mono: {
    deep: [0.6, 0.6, 0.6],
    mid: [0.42, 0.42, 0.42],
    soft: [0.75, 0.75, 0.75],
    glow: [0.32, 0.32, 0.32],
  },
} as const satisfies Record<string, ShaderPalette>;

export type ShaderPaletteName = keyof typeof SHADER_PALETTES;

let activePalette: ShaderPaletteName = "blue";

export function setShaderPalette(name: ShaderPaletteName) {
  activePalette = name;
}

const SHADER_CONFIG = {
  get palette() {
    const p = SHADER_PALETTES[activePalette];
    return { deepBlue: p.deep, midBlue: p.mid, softBlue: p.soft, glow: p.glow };
  },
  ring: {
    lineWidth: 0.001,
    lineWidthScale: 4.5,
    fractScale: 0.8,
    uvMod: 0.15,
    deepWeight: 0.82,
    midWeight: 0.9,
    softWeight: 0.98,
  },
  fill: {
    radius: 0.72,
    mix: 0.55,
    strength: 1.15,
  },
  glow: {
    blueWeight: 1.05,
    greenWeight: 0.18,
    power: 0.62,
    strength: 0.22,
    alphaWeight: 0.07,
  },
  alpha: {
    start: 0.095,
    end: 0.42,
    ease: 0.78,
  },
  motion: {
    startTime: 0.9,
    playbackRate: 0.00165,
    durationMs: 6200,
    fadeInMs: 720,
    fadeOutMs: 1080,
    peakOpacity: 0.94,
    radiusStart: 1.42,
    radiusEnd: 1.04,
    radiusEase: 1.8,
  },
} as const;

const VERTEX_SHADER = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

function formatShaderNumber(value: number) {
  return Number.isInteger(value) ? `${value}.0` : `${value}`;
}

function formatShaderVec3(values: readonly [number, number, number]) {
  return `vec3(${values.map(formatShaderNumber).join(", ")})`;
}

function createFragmentShader() {
  const { alpha, fill, glow, palette, ring } = SHADER_CONFIG;

  return `
    precision highp float;

    uniform vec2 resolution;
    uniform float time;
    uniform float radiusScale;

    const float LINE_WIDTH = ${formatShaderNumber(ring.lineWidth)};
    const float LINE_WIDTH_SCALE = ${formatShaderNumber(ring.lineWidthScale)};
    const float FRACT_SCALE = ${formatShaderNumber(ring.fractScale)};
    const float UV_MOD = ${formatShaderNumber(ring.uvMod)};

    const float DEEP_WEIGHT = ${formatShaderNumber(ring.deepWeight)};
    const float MID_WEIGHT = ${formatShaderNumber(ring.midWeight)};
    const float SOFT_WEIGHT = ${formatShaderNumber(ring.softWeight)};

    const float FILL_RADIUS = ${formatShaderNumber(fill.radius)};
    const float FILL_MIX = ${formatShaderNumber(fill.mix)};
    const float FILL_STRENGTH = ${formatShaderNumber(fill.strength)};

    const float GLOW_BLUE_WEIGHT = ${formatShaderNumber(glow.blueWeight)};
    const float GLOW_GREEN_WEIGHT = ${formatShaderNumber(glow.greenWeight)};
    const float GLOW_POWER = ${formatShaderNumber(glow.power)};
    const float GLOW_STRENGTH = ${formatShaderNumber(glow.strength)};
    const float GLOW_ALPHA_WEIGHT = ${formatShaderNumber(glow.alphaWeight)};

    const float ALPHA_START = ${formatShaderNumber(alpha.start)};
    const float ALPHA_END = ${formatShaderNumber(alpha.end)};
    const float ALPHA_EASE = ${formatShaderNumber(alpha.ease)};

    const vec3 DEEP_BLUE = ${formatShaderVec3(palette.deepBlue)};
    const vec3 MID_BLUE = ${formatShaderVec3(palette.midBlue)};
    const vec3 SOFT_BLUE = ${formatShaderVec3(palette.softBlue)};
    const vec3 GLOW_COLOR = ${formatShaderVec3(palette.glow)};

    vec2 getUv() {
      return (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    }

    vec3 getBandColor(vec2 uv, float radialDistance, float t) {
      float effectiveLineWidth = LINE_WIDTH * radiusScale * LINE_WIDTH_SCALE;
      vec3 bandColor = vec3(0.0);

      for (int channel = 0; channel < 3; channel++) {
        for (int layer = 0; layer < 5; layer++) {
          bandColor[channel] += effectiveLineWidth * float(layer * layer) / abs(
            fract(t - 0.01 * float(channel) + float(layer) * 0.01) * FRACT_SCALE
            - radialDistance
            + mod(uv.x + uv.y, UV_MOD)
          );
        }
      }

      return bandColor;
    }

    float getBlueGlow(vec3 bandColor) {
      float source = clamp(
        bandColor.b * GLOW_BLUE_WEIGHT + bandColor.g * GLOW_GREEN_WEIGHT,
        0.0,
        1.0
      );

      return pow(source, GLOW_POWER) * GLOW_STRENGTH;
    }

    vec3 getBaseColor(vec3 bandColor) {
      return
        DEEP_BLUE * (bandColor.r * DEEP_WEIGHT) +
        MID_BLUE * (bandColor.g * MID_WEIGHT) +
        SOFT_BLUE * (bandColor.b * SOFT_WEIGHT);
    }

    vec3 getFilledColor(vec3 baseColor, float radialDistance) {
      float coreFill = 1.0 - smoothstep(0.0, FILL_RADIUS, radialDistance);
      vec3 fillColor = mix(MID_BLUE, SOFT_BLUE, FILL_MIX) * coreFill * FILL_STRENGTH;

      return baseColor + fillColor;
    }

    float getAlpha(vec3 bandColor, float blueGlow) {
      float source = max(max(bandColor.r, bandColor.g), bandColor.b) + blueGlow * GLOW_ALPHA_WEIGHT;
      float alpha = smoothstep(ALPHA_START, ALPHA_END, source);

      return 1.0 - pow(1.0 - alpha, ALPHA_EASE);
    }

    void main() {
      vec2 uv = getUv();
      float t = time * 0.05;
      float radialDistance = length(uv) * radiusScale;

      vec3 bandColor = getBandColor(uv, radialDistance, t);
      float blueGlow = getBlueGlow(bandColor);
      vec3 baseColor = getBaseColor(bandColor);
      vec3 finalColor = getFilledColor(baseColor, radialDistance) + GLOW_COLOR * blueGlow;
      float alpha = getAlpha(bandColor, blueGlow);

      gl_FragColor = vec4(finalColor, alpha);
    }
  `;
}

// criado sob demanda para respeitar a paleta ativa no momento da montagem

function createUniforms(): ShaderUniforms {
  return {
    time: { value: 1.0 },
    resolution: { value: new THREE.Vector2() },
    radiusScale: { value: SHADER_CONFIG.motion.radiusStart },
  };
}

function styleCanvas(canvas: HTMLCanvasElement) {
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.position = "absolute";
  canvas.style.inset = "0";
}

function resizeRenderer(
  renderer: THREE.WebGLRenderer,
  uniforms: ShaderUniforms,
  container: HTMLDivElement
) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  renderer.setSize(width, height, false);
  uniforms.resolution.value.set(
    renderer.domElement.width,
    renderer.domElement.height
  );
}

function getLayerOpacity(elapsed: number) {
  const { durationMs, fadeInMs, fadeOutMs, peakOpacity } = SHADER_CONFIG.motion;

  if (elapsed <= fadeInMs) {
    return (elapsed / fadeInMs) * peakOpacity;
  }

  if (elapsed > durationMs) {
    return Math.max(peakOpacity * (1 - (elapsed - durationMs) / fadeOutMs), 0);
  }

  return peakOpacity;
}

function getAnimationState(elapsed: number) {
  const {
    durationMs,
    playbackRate,
    radiusEase,
    radiusEnd,
    radiusStart,
    startTime,
  } = SHADER_CONFIG.motion;
  const clampedElapsed = Math.min(elapsed, durationMs);
  const progress = clampedElapsed / durationMs;
  const radiusProgress = 1 - Math.pow(1 - progress, radiusEase);

  return {
    opacity: getLayerOpacity(elapsed),
    radiusScale: THREE.MathUtils.lerp(radiusStart, radiusEnd, radiusProgress),
    time: startTime + clampedElapsed * playbackRate,
  };
}

export function ShaderAnimation({ className }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneRef | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.style.opacity = "0";
    container.style.willChange = "opacity";

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = createUniforms();
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: createFragmentShader(),
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      geometry.dispose();
      material.dispose();
      return;
    }

    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    styleCanvas(renderer.domElement);
    container.appendChild(renderer.domElement);

    const resize = () => resizeRenderer(renderer, uniforms, container);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const startedAt = performance.now();
    const totalDuration =
      SHADER_CONFIG.motion.durationMs + SHADER_CONFIG.motion.fadeOutMs;

    sceneRef.current = {
      animationId: 0,
      renderer,
      uniforms,
    };

    const animate = () => {
      const elapsed = performance.now() - startedAt;
      const state = getAnimationState(elapsed);

      uniforms.time.value = state.time;
      uniforms.radiusScale.value = state.radiusScale;
      container.style.opacity = String(state.opacity);
      renderer.render(scene, camera);

      if (elapsed < totalDuration) {
        const animationId = requestAnimationFrame(animate);

        if (sceneRef.current) {
          sceneRef.current.animationId = animationId;
        }
      }
    };

    animate();

    return () => {
      resizeObserver.disconnect();

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);

        if (container.contains(sceneRef.current.renderer.domElement)) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }

        sceneRef.current.renderer.dispose();
      }

      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-visible ${className || ""}`}
      aria-hidden="true"
    />
  );
}
