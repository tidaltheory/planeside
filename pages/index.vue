<template>
    <div class="container">
        <div class="grid">
            <Trick v-for="(trick, index) in tricksAsList" :key="index">{{
                trick
            }}</Trick>
        </div>
        <div class="mt-8">
            <button @click="doNewTrick">Do a Trick</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

import Trick from '~/components/Trick.vue'
import { makeTrick } from '~/data/utils'

export default Vue.extend({
    components: {
        Trick,
    },

    data() {
        return {
            tricksChangeTracker: 1,
            tricks: new Set(),
        }
    },

    computed: {
        /**
         * Inluding `tricksChangeTracker` lets Vue know to re-evaluate this
         * property since Sets aren't observable (in v2).
         */
        tricksAsList() {
            return this.tricksChangeTracker && Array.from(this.tricks)
        },
    },

    mounted() {
        this.doNewTrick()
    },

    methods: {
        doNewTrick() {
            this.tricks.add(makeTrick())

            if (this.tricks.size === 4) {
                this.tricks.delete(Array.from(this.tricks.values())[0])
            }

            // Update this property to trigger a re-render of the list.
            this.tricksChangeTracker++
        },
    },
})
</script>
