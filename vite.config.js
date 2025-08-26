import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true, // permite acesso externo
		port: 5173, // você pode ajustar a porta se quiser
		allowedHosts: [
			'all'
		]
	}
});
