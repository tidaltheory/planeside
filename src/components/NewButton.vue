<script setup lang="ts">
interface Props {
	onclick: (payload: MouseEvent) => void
}

const props = defineProps<Props>()
</script>

<template>
	<button
		class="group relative appearance-none rounded-2xl border-0 bg-transparent outline-none"
		@click="onclick"
	>
		<div class="relative z-10 py-3 px-10 lg:py-4 lg:px-14">
			<span
				class="font-medium uppercase tracking-widest text-white lg:text-lg"
			>
				Drop in
			</span>
		</div>
		<div
			:class="$style.bg"
			class="absolute inset-0 translate-y-[6px] translate-x-2 transform rounded-2xl"
		></div>
		<div class="absolute inset-0 rounded-2xl shadow-inset-white"></div>
	</button>
</template>

<style module>
.bg {
	background-image: linear-gradient(
		to right,
		#45d8fd 0%,
		#38bef3 16%,
		#2ea4e7 33%,
		#2589da 50%,
		#2c72be 66%,
		#325b9d 83%,
		#364676 100%
	);
}
</style>
