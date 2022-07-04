<script setup lang="ts">
import { computed, onMounted, Ref, ref } from 'vue'

import NewButton from '~/components/NewButton.vue'
import TrickList from '~/components/TrickList.vue'
import { makeTrick } from '~/data/utils'

export type TrickObject = {
	id: string
	text: string
}

const tricksChangeTracker = ref(1)
const tricks: Ref<Array<TrickObject>> = ref([])
let trickCounter = 0

/**
 * Inluding `tricksChangeTracker` lets Vue know to re-evaluate this
 * property since Sets aren't observable (in v2).
 */
// const tricksAsList = computed(
// 	() => tricksChangeTracker.value && Array.from(tricks.value)
// )

function doNewTrick() {
	const updatedTricks = tricks.value
	const newTrick = {
		id: `${trickCounter++}`,
		text: makeTrick(),
	}

	updatedTricks.push(newTrick)

	if (updatedTricks.length === 4) {
		updatedTricks.shift()
	}
	// if (tricks.value.size === 4) {
	// 	tricks.value.delete(Array.from(tricks.value.values())[0])
	// }

	// Update this property to trigger a re-render of the list.
	// tricksChangeTracker.value++
	tricks.value = updatedTricks
}

onMounted(() => doNewTrick())
</script>

<template>
	<div class="relative pt-16 pb-24 md:pt-24">
		<div class="relative">
			<div
				class="absolute bottom-3 z-10 grid h-40 w-full grid-rows-1 items-end gap-4 md:relative md:top-0"
			>
				<trick-list :tricks="tricks"></trick-list>
			</div>
		</div>
		<div class="mt-8 ml-4 flex lg:mr-[5vw] lg:justify-end">
			<new-button :onclick="doNewTrick">Do a Trick</new-button>
		</div>
		<div class="mx-auto px-12 pt-16 md:pt-24 lg:px-[8vw]">
			<p>
				<span aria-hidden>
					<span
						class="dropcap float-left mt-2 mr-2 font-amatic text-5xl leading-none leading-trim"
						>N</span
					>eed
				</span>
				<span class="hidden">Need</span> something to wow your
				subscribers during your next streaming sesh, or just looking for
				a new way to carve the space-time slush? Pluck your next
				hoverboard trick out of the dimensional flotsam — it might
				something basic to keep your combo going, or it could be
				something no one’s ever done before because it defies the laws
				of&nbsp;physics!
			</p>
			<p class="my-10 text-center md:my-12">🛹</p>
			<p>Slugblaster is &copy; Michael Hamm.</p>
		</div>
	</div>
</template>
