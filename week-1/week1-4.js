//-----------------Callback function------------------
// functional arguments
// 
/*
// Step 1 => Can you call one function inside another function ? Yes.

//finds the square of the input
function square(n){
  return n*n ;
}
// find the sum of the squares of the inputs
function sumOfSquares(a,b){
  const val1 = square(a) ;
  const val2 = square(b) ;
  return val1 + val2 ;
}

console.log(sumOfSquares(2,3));
//------------------------------------------------- 

function square(n){
  return n*n ;
}
function cube(n){
  return n*n*n ;
}
function sumOfSquares(a,b){
  const val1 = square(a) ;
  const val2 = square(b) ;
  return val1 + val2 ;
}
function sumOfCube(a,b){
  const val1 = cube(a) ;
  const val2 = cube(b) ;
  return val1 + val2 ;
}

const ans = sumOfCube(2,2)
console.log(ans); 
// but here is the flaw - DRY is being violated here 
*/
// --- Here CALLBACK comes into the feature---

function square(n){
  return n*n ;
}
function cube(n){
  return n*n*n ;
}
function sumOfSomething(a,b,func){
  const val1 = func(a) ;
  const val2 = func(b) ;
  return val1+ val2 ;
}

const ans1 = sumOfSomething(2,3, square) ; 
console.log(ans1);
 
// anonymous function  - the same logic as above, just we write the function code we are calling it 

function sumOfSomething(a,b,func){
  const val1 = func(a) ;
  const val2 = func(b) ;
  return val1+ val2 ;
}
const ans2 = sumOfSomething(a,b, function (n){
  return n* n * n ;
})
// this do the same job 
