<template>
	<div
		:class="$style.container"
		class="relative grid min-h-screen md:grid-cols-2 md:grid-rows-1"
	>
		<router-view />
		<div class="relative row-start-1 md:col-start-2">
			<div
				class="sticky top-0 h-full bg-black bg-cover bg-right"
				:class="$style.image"
			></div>
		</div>
		<div
			class="pointer-events-none fixed -top-[13vw] w-full select-none text-center uppercase text-white font-amatic text-[20vw] leading-none"
			aria-hidden
		>
			Slugblaster
		</div>
		<div
			class="pointer-events-none fixed -bottom-[13vw] w-full select-none text-center uppercase text-white font-amatic text-[20vw] leading-none"
			aria-hidden
		>
			Slugblaster
		</div>
	</div>
</template>

<style lang="postcss" module>
.container {
	grid-template-rows: 25vh auto;
	@apply md:grid-rows-1;
}

.image {
	background-image: url('/cosmos.jpg');
}
</style>
