let fizzbuzzcount = 0;
for (let i=1; i<=100; i++){
    if(i % 5 ===0 && i % 3 ===0 ){
        process.stdout.write("fizzbuzz" + "," + " ");
        fizzbuzzcount++;
    }
    else if(i % 3 ===0){
        process.stdout.write( "fizz"+ "," +" ");
    }
    else if(i % 5 ===0){
        process.stdout.write("buzz" + "," + " ");
    }
    else{
        process.stdout.write(i + "," + " ");
    }
}
console.log()
console.log(`fizzbuzz appeared ${fizzbuzzcount} times`)