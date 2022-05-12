<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import NewButton from '~/components/NewButton.vue'
import TrickList from '~/components/TrickList.vue'
import { makeTrick } from '~/data/utils'

const tricksChangeTracker = ref(1)
const tricks = ref(new Set<string>())

/**
 * Inluding `tricksChangeTracker` lets Vue know to re-evaluate this
 * property since Sets aren't observable (in v2).
 */
const tricksAsList = computed(
	() => tricksChangeTracker.value && Array.from(tricks.value)
)

function doNewTrick() {
	tricks.value.add(makeTrick())

	if (tricks.value.size === 4) {
		tricks.value.delete(Array.from(tricks.value.values())[0])
	}

	// Update this property to trigger a re-render of the list.
	tricksChangeTracker.value++
}

onMounted(() => doNewTrick())
</script>

<template>
	<div class="py-24">
		<div class="grid h-32 items-end gap-4">
			<trick-list :tricks="tricksAsList"></trick-list>
		</div>
		<div class="mt-8 ml-4 flex lg:mr-[5vw] lg:justify-end">
			<new-button :onclick="doNewTrick">Do a Trick</new-button>
		</div>
		<div class="mx-auto mt-24 px-8 lg:px-[8vw]">
			<p>
				<span aria-hidden>
					<span
						class="dropcap float-left mt-2 mr-2 font-amatic text-5xl leading-none capsize"
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
			<p class="my-12 text-center">🛹</p>
			<p>Slugblaster is &copy; Michael Hamm.</p>
		</div>
	</div>
</template>
