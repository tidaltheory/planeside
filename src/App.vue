<script setup lang="ts">
import { useHead } from '@vueuse/head'

const DESCRIPTION =
	'A hoverboard trick generator for the Slugblaster RPG — do more than just kickflip over that quantum centipede!'

/**
 * https://github.com/vueuse/head
 * You can use this to manipulate the document head in any components, they will
 * be rendered correctly in the html results with vite-ssg.
 */
useHead({
	title: 'Planeside',
	meta: [
		{ name: 'description', content: DESCRIPTION },
		{ property: 'og:title', content: 'Planeside' },
		{ property: 'og:site_name', content: 'Planeside' },
		{ property: 'og:description', content: DESCRIPTION },
	],
})
</script>

<template>
	<router-view />
</template>
