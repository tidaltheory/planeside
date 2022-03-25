import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
// import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),

		// https://github.com/hannoeru/vite-plugin-pages
		Pages({
			extensions: ['vue', 'md'],
		}),

		// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
		Layouts(),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				// 'vue-i18n',
				'@vueuse/head',
				'@vueuse/core',
			],
			dts: 'src/auto-imports.d.ts',
		}),

		// https://github.com/antfu/vite-plugin-pwa
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
			manifest: {
				name: 'Vitesse',
				short_name: 'Vitesse',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],

	// https://github.com/antfu/vite-ssg
	ssgOptions: {
		script: 'async',
		formatting: 'minify',
		// onFinished() { generateSitemap() },
	},

	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
		exclude: ['vue-demi'],
	},

	// https://github.com/vitest-dev/vitest
	test: {
		include: ['__tests__/**/*.test.ts'],
		environment: 'jsdom',
		deps: {
			inline: ['@vue', '@vueuse', 'vue-demi'],
		},
	},
})