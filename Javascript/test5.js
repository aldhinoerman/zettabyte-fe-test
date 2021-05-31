// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  var digits = num.toString(2).split('');
  var realDigits = digits.map(Number)
  for (var i = 0, sum = 0; i < realDigits.length; sum += realDigits[i++]);
  return sum;
}

console.log(result(number));