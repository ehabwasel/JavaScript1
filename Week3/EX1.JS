
function giveCompliment(ehab){
  const compliments=["great","awaiswm","good","verygood","exellent","smart ","strong","courageous","sunshine ","Goodlooking","INTELGENT"];
 let rand= compliments[Math.random() * compliments.length | 0];
   
   return  console.log("You Are" ,rand, "Ehab!")
 
    
}

giveCompliment();