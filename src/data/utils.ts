import {
	BOARDFLIPS,
	BOARD_PRE,
	FLIPS,
	FLIP_PRE,
	GRABS,
	GRAB_PRE,
	GRINDS,
	GRIND_PRE,
	INTRO,
	SPINS,
	SPIN_PRE,
	SPIN_SUF,
} from './data'
import { Odds } from './odds'

const odds = new Odds()

const TRICK_TYPES = ['vert', 'flat', 'grind' /*, 'plant', 'stall'*/]

export function makeTrick() {
	let type = TRICK_TYPES[odds.natural(0, TRICK_TYPES.length - 1)]

	switch (type) {
		case 'vert':
			return makeVertTrick()
		case 'grind':
			return makeGrindTrick()
		case 'plant':
		// return makePlantTrick()
		case 'stall':
		// return makeStallTrick()
		case 'flat':
		default:
			return makeFlatTrick()
	}
}

/**
 * TRICK TYPES
 */

/**
 * Comprised of a possible grab and either a flip or spin move.
 */
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

function makeFlatTrick() {
	let includeIntro = odds.bool(30)
	let includeSpin = odds.bool(30)
	let includeBoard = odds.bool(30)

	return [
		includeIntro && getIntro(),
		// FACE[odds.natural(0, FACE.length - 1)],
		getSpinMove(),
		// includeSpin || (!includeBoard && getSpinMove()),
		// includeBoard || (!includeSpin && getBoardMove()),
	]
		.flat()
		.filter((value) => Boolean(value))
		.join(' ')
}

function makeGrindTrick() {
	let includeIntro = odds.bool(30)
	let includePre = odds.bool(30)
	let includeOutro = odds.bool(30)

	return [
		includeIntro && getIntro(),
		includeIntro && 'to',
		includePre && GRIND_PRE[odds.natural(0, GRIND_PRE.length - 1)],
		GRINDS[odds.natural(0, GRINDS.length - 1)],
		// includeOutro && getOutro(),
		// includeOutro && 'out',
	]
		.flat()
		.filter((value) => Boolean(value))
		.join(' ')
}

function makePlantTrick() {}

function makeStallTrick() {}

/**
 * MOVE TYPES
 */

/**
 * A starter, non-aerial move.
 */
function getIntro() {
	return INTRO[odds.natural(0, INTRO.length - 1)]
}

/**
 * A board grab with an optional prefix.
 */
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

function getBoardMove() {
	let includePre = odds.bool(45)
	let flip = odds.natural(0, BOARDFLIPS.length - 1)

	let flipMove = [
		includePre && BOARD_PRE[odds.natural(0, BOARD_PRE.length - 1)],
		BOARDFLIPS[flip],
	].filter((value) => Boolean(value))

	return flipMove
}
