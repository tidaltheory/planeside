<template>
    <button
        class="group relative bg-transparent border-0 rounded-2xl appearance-none outline-none"
        @click="onclick"
    >
        <div class="relative z-10 py-3 lg:py-4 px-10 lg:px-14">
            <span
                class="lg:text-lg font-medium text-white tracking-widest uppercase"
                >Drop in</span
            >
        </div>
        <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#45D8FD] to-[#364676] transform translate-y-[6px] translate-x-2"
        />
        <div class="absolute inset-0 rounded-2xl shadow-inset-white" />
    </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        onclick: {
            type: Function,
            default: () => {},
        },
    },
})
</script>
