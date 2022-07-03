import {
	FLIPS,
	FLIP_PRE,
	GRABS,
	GRAB_PRE,
	SPINS,
	SPIN_PRE,
	SPIN_SUF,
} from './data'
import { Odds } from './odds'

const odds = new Odds()

export function makeTrick() {
	const type = 'vert'

	switch (type) {
		case 'vert':
			return makeVertTrick()
		default:
			return ''
	}
}

function makeVertTrick() {
	let includeGrab = odds.bool(35)
	let doFlip = odds.bool(50)

	return [
		includeGrab && getGrabMove(),
		doFlip ? getFlipMove() : getSpinMove(),
	]
		.flat()
		.filter((value) => Boolean(value))
		.join(' ')
}

function getGrabMove() {
	let includePre = odds.bool(40)
	let grab = odds.natural(0, GRABS.length - 1)

	let grabMove = [
		includePre && GRAB_PRE[odds.natural(0, GRAB_PRE.length - 1)],
		GRABS[grab],
	].filter((value) => Boolean(value))

	return grabMove
}

function getFlipMove() {
	let includePre = odds.bool(45)
	let flip = odds.natural(0, FLIPS.length - 1)

	let flipMove = [
		includePre && FLIP_PRE[odds.natural(0, FLIP_PRE.length - 1)],
		FLIPS[flip],
	].filter((value) => Boolean(value))

	return flipMove
}

function getSpinMove() {
	let includePre = odds.bool(45)
	let includePost = odds.bool(30)
	let spin = odds.natural(0, SPINS.length - 1)

	let spinMove = [
		includePre && SPIN_PRE[odds.natural(0, SPIN_PRE.length - 1)],
		SPINS[spin],
		includePost && SPIN_SUF[odds.natural(0, SPIN_SUF.length - 1)],
	].filter((value) => Boolean(value))

	return spinMove
}
