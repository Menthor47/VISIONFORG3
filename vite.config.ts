import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';
import { componentTagger } from 'lovable-tagger';
import ViteImageOptimize from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    mode === 'development' && componentTagger(),
    ViteImageOptimize({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      webp: {
        quality: 80,
      },
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'radix-ui';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('framer-motion')) return 'animations';
            return 'vendor';
          }
        },
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4kb
    sourcemap: mode === 'development',
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  css: {
    devSourcemap: mode === 'development',
  },
}));
