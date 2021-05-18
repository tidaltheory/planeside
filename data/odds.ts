const MAX_INT = 9007199254740992
const MIN_INT = -MAX_INT

export class Odds {
    mt
    seed?: number
    random: Function

    constructor(seed?: number) {
        this.seed = seed
        this.mt = this.mersenneTwister(this.seed)
        this.random = function () {
            return this.mt.random()
        }

        return this
    }

    mersenneTwister(seed?: number) {
        return new MersenneTwister(seed)
    }

    /**
     * Returns a random boolean value.
     */
    bool(likelihood = 50) {
        return this.random() * 100 < likelihood
    }

    /**
     * Returns a random integer.
     *
     * Note: The max and min are **included** in the range. So
     * ```
     * integer({ min: 1, max: 3 })
     * ```
     * would return either 1, 2, or 3.
     */
    integer(min = MIN_INT, max = MAX_INT) {
        return Math.floor(this.random() * (max - min + 1) + min)
    }

    /**
     * Returns a random natural number.
     *
     * Note: The max and min are **included** in the range. So
     * ```
     * natural({ min: 1, max: 3 })
     * ```
     * would return either 1, 2, or 3.
     */
    natural(min = 0, max = MAX_INT, exclude?: number[]) {
        if (exclude) {
            const sortedExclusions = exclude.sort()
            let random: number =
                min + this.natural((max = max - min - exclude.length))

            for (const sortedExclusionsIndex in sortedExclusions) {
                if (random < sortedExclusions[sortedExclusionsIndex]) break
                random++
            }

            return random
        }

        return this.integer(min, max)
    }
}

// Mersenne Twister from https://gist.github.com/banksean/300494
/*
    A C-program for MT19937, with initialization improved 2002/1/26.
    Coded by Takuji Nishimura and Makoto Matsumoto.
    Before using, initialize the state by using init_genrand(seed)
    or init_by_array(init_key, key_length).
    Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
    All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
    3. The names of its contributors may not be used to endorse or promote
    products derived from this software without specific prior written
    permission.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    Any feedback is very welcome.
    http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
    email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/
class MersenneTwister {
    /* Period parameters */
    N = 624
    M = 397
    MATRIX_A = 0x9908b0df /* constant vector a */
    UPPER_MASK = 0x80000000 /* most significant w-r bits */
    LOWER_MASK = 0x7fffffff /* least significant r bits */

    mt
    mti

    constructor(seed?: number) {
        if (seed === undefined) {
            // kept random number same size as time used previously to ensure no unexpected results downstream
            seed = Math.floor(Math.random() * Math.pow(10, 13))
        }

        this.mt = new Array(this.N) /* the array for the state vector */
        this.mti = this.N + 1 /* mti==N + 1 means mt[N] is not initialized */

        this.initGenrand(seed)
    }

    initGenrand(s: number) {
        this.mt[0] = s >>> 0
        for (this.mti = 1; this.mti < this.N; this.mti++) {
            s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)
            this.mt[this.mti] =
                ((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
                (s & 0x0000ffff) * 1812433253 +
                this.mti
            /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
            /* In the previous versions, MSBs of the seed affect   */
            /* only MSBs of the array mt[].                        */
            /* 2002/01/09 modified by Makoto Matsumoto             */
            this.mt[this.mti] >>>= 0
            /* for >32 bit machines */
        }
    }

    /* generates a random number on [0,0xffffffff]-interval */
    genrandInt32() {
        const mag01 = [0x0, this.MATRIX_A]
        /* mag01[x] = x * MATRIX_A  for x=0,1 */
        let y

        if (this.mti >= this.N) {
            /* generate N words at one time */
            let kk

            if (this.mti === this.N + 1) {
                /* if init_genrand() has not been called, */
                this.initGenrand(5489) /* a default initial seed is used */
            }

            for (kk = 0; kk < this.N - this.M; kk++) {
                y =
                    (this.mt[kk] & this.UPPER_MASK) |
                    (this.mt[kk + 1] & this.LOWER_MASK)
                this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1]
            }

            for (; kk < this.N - 1; kk++) {
                y =
                    (this.mt[kk] & this.UPPER_MASK) |
                    (this.mt[kk + 1] & this.LOWER_MASK)
                this.mt[kk] =
                    this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1]
            }

            y =
                (this.mt[this.N - 1] & this.UPPER_MASK) |
                (this.mt[0] & this.LOWER_MASK)
            this.mt[this.N - 1] =
                this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1]

            this.mti = 0
        }

        y = this.mt[this.mti++]

        /* Tempering */
        y ^= y >>> 11
        y ^= (y << 7) & 0x9d2c5680
        y ^= (y << 15) & 0xefc60000
        y ^= y >>> 18

        return y >>> 0
    }

    /* generates a random number on [0,1)-real-interval */
    random() {
        return this.genrandInt32() * (1.0 / 4294967296.0)
        /* divided by 2^32 */
    }
}
