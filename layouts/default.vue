<template>
    <div
        :class="$style.container"
        class="grid md:grid-rows-1 md:grid-cols-2 h-screen"
    >
        <Nuxt />
        <div class="row-start-1 md:col-start-2 h-full bg-black" />
    </div>
</template>

<style lang="postcss" module>
.container {
    grid-template-rows: 25vh auto;
    @apply md:grid-rows-1;
}
</style>
