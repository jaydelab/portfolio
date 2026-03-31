import type { UnicornStudioApi } from "./unicorn-studio-types";

type UnicornRuntimeWindow = Window & {
  UnicornStudio?: UnicornStudioApi;
  __portfolioUnicornRuntimePromise__?: Promise<UnicornStudioApi>;
};

const RUNTIME_SELECTOR = 'script[data-portfolio-unicorn-runtime="true"]';

export function loadUnicornStudioRuntime(runtimeUrl: string) {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window indisponível."));
  }

  const unicornWindow = window as UnicornRuntimeWindow;

  if (unicornWindow.UnicornStudio) {
    return Promise.resolve(unicornWindow.UnicornStudio);
  }

  if (unicornWindow.__portfolioUnicornRuntimePromise__) {
    return unicornWindow.__portfolioUnicornRuntimePromise__;
  }

  unicornWindow.__portfolioUnicornRuntimePromise__ = new Promise<UnicornStudioApi>(
    (resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(RUNTIME_SELECTOR);
      const script = existingScript ?? document.createElement("script");

      const cleanup = () => {
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };

      const resetPromise = () => {
        unicornWindow.__portfolioUnicornRuntimePromise__ = undefined;
      };

      const handleLoad = () => {
        cleanup();

        if (!unicornWindow.UnicornStudio) {
          resetPromise();
          reject(new Error("Runtime UnicornStudio não carregou."));
          return;
        }

        script.dataset.runtimeLoaded = "true";
        resolve(unicornWindow.UnicornStudio);
      };

      const handleError = () => {
        cleanup();
        resetPromise();

        if (!existingScript) {
          script.remove();
        }

        reject(new Error(`Falha ao carregar runtime UnicornStudio: ${runtimeUrl}`));
      };

      if (existingScript?.dataset.runtimeLoaded === "true" && unicornWindow.UnicornStudio) {
        resolve(unicornWindow.UnicornStudio);
        return;
      }

      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", handleError, { once: true });

      if (!existingScript) {
        script.async = false;
        script.src = runtimeUrl;
        script.dataset.portfolioUnicornRuntime = "true";
        document.head.appendChild(script);
      }
    },
  );

  return unicornWindow.__portfolioUnicornRuntimePromise__;
}
