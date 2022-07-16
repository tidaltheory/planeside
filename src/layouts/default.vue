<script setup lang="ts">
import HeroImage from '~/components/HeroImage.vue'
import SlugblasterText from '~/components/SlugblasterText.vue'
</script>

<template>
	<div
		:class="$style.container"
		class="relative grid min-h-screen md:grid-cols-2 md:grid-rows-1"
	>
		<router-view />
		<div class="relative row-start-1 md:col-start-2">
			<div
				class="sticky top-0 h-full bg-black bg-cover bg-right md:h-screen"
			>
				<hero-image class="opacity-90" />
			</div>
		</div>

		<div class="fixed -top-[6vw] w-full md:-top-[13vw]">
			<slugblaster-text />
		</div>
		<div
			class="fixed bottom-0 h-[20vw] w-full bg-gradient-to-t from-gray-900"
		></div>
		<div class="fixed -bottom-[13vw] w-full">
			<slugblaster-text />
		</div>
	</div>
</template>

<style lang="postcss" module>
.container {
	grid-template-rows: 25vh auto;
	@apply md:grid-rows-1;
}
</style>
