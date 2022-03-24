/**
 * Prevent TS error with `import App from './App.vue'` in `main.ts`.
 */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
