let marks = 34;
let grade = "";
let group="";
let option="";

if( marks < 0 || marks > 100){
    // console.log(`Invalid input od marks`)
    grade="A";
    option="PASS";
    group="execellent";
}
else if(marks >= 80){
    // console.log(`option: excellent`)
    grade="A";
     option="PASS";
    group="execellent";
}
else if(marks >= 70 && marks <= 79){
    // console.log(`option: amazing`)
    grade="B";
     option="PASS";
    group="amazing";
}
else if(marks >= 60 && marks <= 69){
    // console.log(`option: good`)
    grade="C";
     option="PASS";
    group="Good";
}
else if(marks >= 50 && marks <= 59){
    // console.log(`option: fair`)
    grade="D";
     option="MEDIUM";
    group="Fair";
}
else{
    // console.log(`option: bad`)
    grade="F";
     option="FAIL";
    group="Bad";
}

console.log("");
console.log(`Mark: ${marks} | Grade: ${grade} | ${group} | ${option}`);
