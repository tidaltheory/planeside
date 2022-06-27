<script setup lang="ts">
import type { TrickObject } from '~/pages/index.vue'
import TrickText from './TrickText.vue'

interface Props {
	tricks: Array<TrickObject>
}

const props = defineProps<Props>()
</script>

<template>
	<transition-group name="list">
		<trick-text
			v-for="trick in props.tricks"
			:key="trick.id"
			:data-id="trick.id"
		>
			{{ trick.text }}
		</trick-text>
	</transition-group>
</template>

<style>
.list-move,
.list-enter-active {
	transition: transform 200ms ease, opacity 200ms ease;
}

.list-leave-active {
	width: 100%;
	position: absolute;
	transition: all 100ms ease;
}

.list-enter-from {
	opacity: 0;
	transform: translateY(2rem);
}

.list-leave-from {
	top: 0;
}

.list-leave-to {
	opacity: 0;
	top: 0;
}
</style>
