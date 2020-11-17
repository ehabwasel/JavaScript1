// FIRST I HAVE TO NAME THE FUNCTION I GAVE convert AS A NAME 
// SECOND WITER THE PARAMETERS OF FUNCTION 
// SCORE REPRESINTS STUDENT SCORE AND MAX REPRSENTS MAX SCORE 
// X REPRESINTS THE AVERAGE GRADE 
// I USE IF AND ELSE IF STATMENT  
function convert(score,maxScore){
  let x= (score/maxScore)*100;
   score = 75;
  if(x>=90 && x<100){
    console.log("You got a" ,"A", x ,"%" ,"Exellent" )

  }
  else if(x>=80 && x<90){
    console.log("You got a" ,"B", x ,"%","Verygood")

  }
  else if(x>=70 && x<80){
    console.log("You got a" ,"C", x ,"%","Good")

  }
  else if (x>=60&& x<70){
    console.log("You got a" ,"D", x ,"%" ,"Accepted")

  }
  else {
    console.log("You got a" ,"F", x ,"%","Try Study Hard")

  }
  return;
}
// CALL THE FUNCTION WITH TEST VALUES
 convert(77,100)


