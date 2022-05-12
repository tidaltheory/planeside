<script setup lang="ts">
import anime from 'animejs'

import TrickText from './TrickText.vue'

interface Props {
	tricks: 0 | string[]
}

const props = defineProps<Props>()

function handleEnter(el: Element, done: () => void) {
	let animation = {
		height: [0, el.clientHeight],
		opacity: [0, 1],
		scale: [0.9, 1],
	}
	anime({
		targets: el,
		...animation,
		done,
		easing: 'spring(1, 100, 50, 0)',
	})
}

function handleLeave(el: Element, complete: Function) {
	let animation = {
		height: 0,
		opacity: [1, 0],
		scale: [1, 0.9],
	}
	anime({
		targets: el,
		...animation,
		complete,
		easing: 'spring(1, 100, 70, 0)',
	})
}
</script>

<template>
	<transition-group :css="false" @enter="handleEnter" @leave="handleLeave">
		<trick-text v-for="(trick, index) in props.tricks" :key="index">
			{{ trick }}
		</trick-text>
	</transition-group>
</template>
