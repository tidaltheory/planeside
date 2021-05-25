<template>
    <button
        class="
            group
            relative
            bg-transparent
            border-0
            rounded-2xl
            appearance-none
            outline-none
        "
        @click="onclick"
    >
        <div class="relative z-10 py-3 lg:py-4 px-10 lg:px-14">
            <span
                class="
                    lg:text-lg
                    font-medium
                    text-white
                    tracking-widest
                    uppercase
                "
                >Drop in</span
            >
        </div>
        <div
            :class="$style.bg"
            class="
                absolute
                inset-0
                rounded-2xl
                transform
                translate-y-[6px] translate-x-2
            "
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
