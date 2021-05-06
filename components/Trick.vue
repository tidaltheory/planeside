<template>
    <span>{{ trickText }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

import { makeGrabMove } from '~/data/utils'

const makeTrick = () => {
    const type = 'vert'

    switch (type) {
        case 'vert':
            return [makeGrabMove()].join(' ')
        default:
            return ''
    }
}

export default Vue.extend({
    data() {
        return {
            trickText: '',
        }
    },

    mounted() {
        this.trickText = makeTrick()
    },
})
</script>
