function merge(arr1, arr2) {
  const output = [];

	while (arr1.length > 0 && arr2.length > 0) {
		if (arr1[0] <= arr2[0]) {
			output.push(arr1.shift());
		} else {
			output.push(arr2.shift());
		}
	}

	if (arr1.length === 0) {
		return output.concat(arr2);
	} else {
		return output.concat(arr1);
	}
}

function mergeSort(arr) {
  if (arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

if (require.main === module) {
  // add your own tests in here
	// console.log(merge([38], [27]));

  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
