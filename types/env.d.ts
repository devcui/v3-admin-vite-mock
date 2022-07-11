/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_DEV: boolean;
  readonly VITE_PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
