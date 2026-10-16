let marks = [78, 45, 92, 60, 33, 87, 50, 69];
let passCount=0;
let failCount=0;
let highest=marks[0];
let lowest=marks[0];
let total=0;

for(const m of marks){
    if(m >= 50){
        console.log(`Mark: ${m} | PASS`)
        passCount++;
    }
    else{
        failCount++;
         console.log(`Mark: ${m} | FAIL`)
    }
    total += m;

    if(m > highest){
        highest = m;
    }

    if(m < lowest){
        lowest = m;
    }
}

let average = total / marks.length;

console.log("--------------------");
console.log("Passed: " + passCount + " | Failed: " + failCount);
console.log("Highest: " + highest + " | Lowest: " + lowest);
console.log("Total: " + total);
console.log("Average: " + average.toFixed(1));

