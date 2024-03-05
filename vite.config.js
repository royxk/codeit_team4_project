import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// aws-sdk 요놈이 node 를 건드리는  것 같습니다
// 근데 vite가 client다 보니 node환경을 배제하고 빌드를 마는 것 같아요
// 혹시 모르니까 잊지말고 vite.config.js에 아래와 같이 설정을 해주시면 될 것 같아요

export default defineConfig({
  plugins: [react()],
  define: { _global: {} },

  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser", // 모듈의 실제 위치를 브라우저 번들러에게 알려줌
    },
  },

  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/], // 번들에 포함시킬 모듈의 경로
      extensions: [".js", ".cjs"], // CommonJS 모듈로 간주할 파일의 확장자
      strictRequires: true, // require 구문에 해당 모듈이 없을 경우 에러 발생
      transformMixedEsModules: true, // import와 require문을 함께 사용하는 경우 이를 번들에 포함시키기 위함
    },
  },
});

//
