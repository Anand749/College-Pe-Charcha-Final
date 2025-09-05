/// <reference types="vite/client" />

declare module "*.JPG" {
  const src: string;
  export default src;
}
export default {
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.GIF']
}

declare module "*.heic" {
  const src: string;
  export default src;
}
