function secondLargest(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 2];
}

module.exports = secondLargest;
