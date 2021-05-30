<template>
    <div class="py-24">
        <div class="grid gap-4">
            <Trick v-for="(trick, index) in tricksAsList" :key="index">{{
                trick
            }}</Trick>
        </div>
        <div class="flex lg:justify-end mt-8 lg:mr-[5vw] ml-4">
            <Button :onclick="doNewTrick">Do a Trick</Button>
        </div>
        <div class="px-8 lg:px-[8vw] mt-24 mx-auto">
            <p>
                <span aria-hidden
                    ><span
                        class="
                            dropcap
                            float-left
                            mt-2
                            mr-2
                            font-amatic
                            text-5xl
                            leading-none
                            capsize
                        "
                        >N</span
                    >eed</span
                >
                <span class="hidden">Need</span> something to wow your
                subscribers during your next streaming sesh, or just looking for
                a new way to carve the space-time slush? Pluck your next
                hoverboard trick out of the dimensional flotsam — it might
                something basic to keep your combo going, or it could be
                something no one’s ever done before because it defies the laws
                of&nbsp;physics!
            </p>
            <p class="my-12 text-center">🛹</p>
            <p>Slugblaster is &copy; Michael Hamm.</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

import Button from '~/components/Button.vue'
import Trick from '~/components/Trick.vue'
import { makeTrick } from '~/data/utils'

export default Vue.extend({
    components: {
        Button,
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
