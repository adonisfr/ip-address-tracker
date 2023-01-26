/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IP_IPIFY_URL: string;
  readonly VITE_GEO_IPIFY_URL: string;
  readonly VITE_GEO_IPIFY_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
