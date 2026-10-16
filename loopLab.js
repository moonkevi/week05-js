
console.log(`ascending:`)
let count=50;
for(count=2; count <= 50; count++){
    if(count%2===0){
        // console.log(count);
        process.stdout.write( count +  " ");
    }
    
}

// console.log("\n");

console.log(`descending:`)
while(count >= 2 && count %2===0){
    // console.log(count);
     process.stdout.write(count + "");
    count--;
}
console.log("\n")

for(let num=1; num <= 30; num++){
    if(num % 6 === 0){
        continue;
    }
      process.stdout.write(num + " ");
}

console.log("\n")

// sum of add numbers from1-99

let sum = 0;
for(let number = 1; number < 100; number++){
    sum+=number;
}
console.log("Sum of odd numbers:", sum);