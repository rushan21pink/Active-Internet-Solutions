import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // unplugin-auto-import
    // Auto import APIs on-demand
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
    }),
    // windi-css
    WindiCSS(),
  ],
});
