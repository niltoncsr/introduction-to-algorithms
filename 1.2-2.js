/*
	Suppose we are comparing implementations of insertion sort and merge sort on
	the same machine. For inputs of size n, insertion sort runs in 8n^2 steps,
	while merge sort runs in 64n*lg n steps. For which values of n does insertion
	sort beat merge sort?
*/

const insertionSortSteps = n => 8 * Math.pow(n, 2)

const mergeSortSteps = n => 64 * n * Math.log(n)


let insertionResult = 1
let mergeResult = 0
let turningPoint = 1

while(insertionResult > mergeResult) {
	turningPoint++
	insertionResult = insertionSortSteps(turningPoint)
	mergeResult = mergeSortSteps(turningPoint)
}

console.log(`From 1 to ${turningPoint}`)