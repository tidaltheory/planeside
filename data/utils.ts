import { GRABS, GRAB_PRE } from './data'
import { Odds } from './odds'

const odds = new Odds()

export function makeTrick() {
    const type = 'vert'

    switch (type) {
        case 'vert':
            return makeGrabMove()
        default:
            return ''
    }
}

function makeGrabMove() {
    const includePre = odds.bool(40)
    const p = odds.natural(0, GRAB_PRE.length)
    const g = odds.natural(0, GRABS.length)

    return [includePre ? GRAB_PRE[p] : undefined, GRABS[g]].join(' ')
}
