import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildClientForNetlify() {
  try {
    // Build client-side code
    await build({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
      root: __dirname,
      base: '/',
      build: {
        outDir: 'netlify-dist',
        emptyOutDir: true,
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
          },
        },
      },
    });
    console.log('✅ Client build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildClientForNetlify();