// Add your doToElementsInArray() function here:
function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

// Add your changeCompletely() function here:
