<script setup lang="ts">
function reveal(event: any) {
	;(event.target as HTMLElement).classList.toggle('opacity-0')
	;(event.target as HTMLElement).classList.add('opacity-80')
}
</script>

<template>
	<picture>
		<source
			srcset="/cosmos-v.ea9ba4ce.avif"
			type="image/avif"
			media="(min-width: 768px)"
		/>
		<source
			srcset="/cosmos-v.ea9ba4ce.webp"
			type="image/webp"
			media="(min-width: 768px)"
		/>
		<source
			srcset="/cosmos-v.ea9ba4ce.jpg"
			type="image/jpeg"
			media="(min-width: 768px)"
		/>
		<source srcset="/cosmos-h.69935d14.avif" type="image/avif" />
		<source srcset="/cosmos-h.69935d14.webp" type="image/webp" />
		<img
			class="h-full max-h-full w-full object-cover opacity-0 transition"
			src="/cosmos-h.69935d14.jpg"
			loading="lazy"
			decoding="async"
			@load.once="reveal"
		/>
	</picture>
</template>
