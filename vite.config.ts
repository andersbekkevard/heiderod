import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/heiderod/',
	plugins: [react()],
	build: {
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name].[hash][extname]'
			}
		}
	},
	publicDir: 'public'
});