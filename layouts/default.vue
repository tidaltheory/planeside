<template>
    <div
        :class="$style.container"
        class="relative grid md:grid-rows-1 md:grid-cols-2 min-h-screen"
    >
        <Nuxt />
        <div class="relative row-start-1 md:col-start-2">
            <div class="sticky top-0 h-full bg-black" />
        </div>
    </div>
</template>

<style lang="postcss" module>
.container {
    grid-template-rows: 25vh auto;
    @apply md:grid-rows-1;
}
</style>
