for(let day=1; day<=7; day++){
    let classDay ="";
    let notice ="";

    switch(day){
        case 1:
           classDay= "Monday";
           break;
        case 2:
           classDay= "Tuesday";
           break;
        case 3:
           classDay= "Wednesday";
           break;
        case 4:
           classDay= "Thursday";
    
           break;
        case 5:
           classDay= "Friday";
    
           break;
        case 6:
           classDay= "Saturday";
         
    
           break;
        case 7:
           classDay= "Ivalid day ";
          
           break; 
        default:
                                
    }

    if(day===2 || day===4 || day===6){
        notice="CLASS";
    }
    else{
        notice="FREE-TIME"
    }
    console.log(`Day ${day}: ${classDay} - ${notice}`);
}
