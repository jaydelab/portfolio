export type UnicornStudioAddSceneOptions = {
  dpi?: number;
  element: HTMLElement;
  filePath: string;
  fps?: number;
  interactivity?: {
    mouse?: {
      disableMobile?: boolean;
    };
  };
  lazyLoad?: boolean;
  production?: boolean;
  scale?: number;
};

export type UnicornStudioBaseScene = {
  destroy?: () => void;
};

export type UnicornStudioApi = {
  addScene: (options: UnicornStudioAddSceneOptions) => Promise<UnicornStudioBaseScene>;
};
