// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  const res = [];
  let test = arr1.reduce(function (a, b) {
    return Math.max(a, b);
  })
  let a = arr2.every(best => best > test)
  let b = arr2.some(best => best < test)
  res.push(a, b);
  return res;
}

console.log(result(arr1, arr2));