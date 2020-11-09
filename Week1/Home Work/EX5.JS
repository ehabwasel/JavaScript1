let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
// first way 
let Greatest = Math.max(a, z);
console.log(Greatest);
// second way
let Greatest;
if (z > a) {
  Greatest = z;
} else {
  Greatest = a;
}
console.log(Greatest); 
