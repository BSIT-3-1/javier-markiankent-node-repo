let name = "Mark Ian Kent M. Javier"
console.log(name);
let sec = "BSIT 3-1"
console.log(sec)

let x = 10;
console.log(x);


function isOddOrEven(numberToCheck) {
const even = numberToCheck % 2 == 0;
  
if (even) 
  return console.log(`The number ${numberToCheck} is Even`), add = numberToCheck;
else add= (numberToCheck + 1);
  console.log("even  = " + add)
}

isOddOrEven(x);
console.log(add);


for (let y = 1; y <= add; y++) {
  for (let z = (add - y); z <= add - y; z++){
    space = ' ';
    console.log(space.repeat(z),"* ".repeat(y))
  }
}

for (let y = 1, z = (add - y); y <= add - 1; y++, z--){
  space = ' ';
  console.log(space.repeat(y), "* ".repeat(z))
}
