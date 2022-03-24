<template>
	<div
		:class="$style.container"
		class="relative grid min-h-screen md:grid-cols-2 md:grid-rows-1"
	>
		<router-view />
		<div class="relative row-start-1 md:col-start-2">
			<div class="sticky top-0 h-full bg-black"></div>
		</div>
	</div>
</template>

<style lang="postcss" module>
.container {
	grid-template-rows: 25vh auto;
	@apply md:grid-rows-1;
}
</style>
