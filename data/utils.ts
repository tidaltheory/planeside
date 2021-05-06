import { GRABS, GRAB_PRE } from './data'

export function makeGrabMove() {
    const includePre = Math.round(Math.random()) > 0
    const p = Math.floor(Math.random() * GRAB_PRE.length)
    const g = Math.floor(Math.random() * GRABS.length)
    return [includePre ? GRAB_PRE[p] : undefined, GRABS[g]].join(' ')
}
