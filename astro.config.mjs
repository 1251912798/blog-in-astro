// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    server: {
        allowedHosts: [
            "devserver-main--yinp.netlify.app", // 允许的域名
            ".netlify.app", // 可选：允许所有 netlify.app 子域名
            "localhost", // 保留本地开发支持
        ],
    },
});
