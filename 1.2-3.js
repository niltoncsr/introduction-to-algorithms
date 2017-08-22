/*
	What is the smallest value of n such that an algorithm whose running time is
	100n^2 runs faster than an algorithm whose running time is 2^n on the same
	machine?
*/

const alg1 = n => 100 * Math.pow(n, 2)

const alg2 = n => Math.pow(2, n)


let alg1Result = 1
let alg2Result = 0
let turningPoint = 0

while(alg1Result > alg2Result) {
	turningPoint++
	alg1Result = alg1(turningPoint)
	alg2Result = alg2(turningPoint)
}

console.log(turningPoint)
