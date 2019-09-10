var v = 5; //comment

/* this is a multiline
comment
wow
*/

 // declare variables
var myName;
myName = 'seamus'

// declare and assign in same line
var b = 2;

//different scope to var
let ourName = 'stinson';

// const cant change
const pi = 3.14;

b++;//increment
b+=3;
console.log(b); //writes to console

var remainder;

remainder = 11 % 3; // remainder operator

//string containing quotes

var str = "how do i put 'quotes' in a string ";
var str = "i\n can also \"put\" double quotes \\ in\n\t a string";


console.log(str.length);
console.log(str[0]);

//strings are immutable - cant change individual letters

myArray = [ 1, 2, 3, 'a'];

nestedArray = [[1, 2], [3, 4]];

nestedArray[1][0] = 45;
nestedArray.push([5, 6]) //append
console.log(nestedArray[0][1])

nestedArray.pop(); //remove from array

console.log(nestedArray)

nestedArray.shift() //removes first element

nestedArray.unshift([6,7])
console.log(nestedArray)

//function

function myFunc() {
console.log('hello world')
}

myFunc()

function myArg(a, b) {
  console.log(a - b)
}

myArg(10, 5)

// scope

var global = 10;

function fun2() {
console.log(global)
}

fun2()
function fun3() {
oopsGlobal = 5; // no var key word means automatically global varible
}

function localScope() {
  var myVar = 5;
  console.log(myVar)
  //myVar is local to the func
}

var arg = 7;

function test() {
var arg = 10
console.log(arg)
}
test()
console.log(arg)
// return

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10))
var sum =0;
function addThree() {
sum +=3;
// return value default is undefined
}

addThree()
console.log(sum)
console.log(addThree())

function nextInLine(array, item) {
  array.push(item)
  return array.shift()
}


array = [1, 2, 3]
console.log(nextInLine(array, 4));
console.log(array);

//print array as string

console.log('my array is' +' '+JSON.stringify(array))

function bool() {
return false;
}

console.log(bool())

function even(arg) {
  if (arg%2 ==0){
    return 'even';
  }
  return 'odd';
}

console.log(even(7))

function testEqual(val) {
  if (val == 12) {
    return 'equal';
  } else {
    return 'not equal';
  }
// else if (condition) {
//
//}
}

console.log(3==='3')
console.log(3=='3')
// != not equal
// strict inequality !== doesnt convert types
// >=
// && and
// || or


// once first condition is met doesnt check other statements

//swithch statements

function caseSwitch(val) {

  var answer = '';
  switch (val) {
    case 1:
      answer = 'alpha';
      break;
    case 2:
      answer = 'beta';
      break;
    case 3:
      answer = 'gamma';
      break;
    case 4:
      answer = 'delta';
      break;
    case 5:
    case 6:
    case 7:
      answer = 'stuff';
      break;
      //5,6,7 return same value
    default:
      answer = 'error';
      break;
  }
  return answer;
}

var ourDog = {
  'name': 'camper',
  'legs': 4,
  'tails': 1
}

console.log(ourDog.name);
console.log(ourDog['name']);
//can add new property using ourDog.newProp = 'new name'
delete ourDog.name

//hasOwnProperty method
console.log(ourDog.hasOwnProperty('leads'))
