function validateCreditNumber(inputtxt) {
  //these validate i declared to use them when all conditions are true
  let validate1= false;
  let validate2= false;
  let validate3= false;
  let validate4= false;
  //this condition for length of inpute
  if(inputtxt.length<16||inputtxt.length>16) 
  { 
  alert('Input must be 16  numbers!');}
  else{
    validate1= true;
  }
 
 //this condition for the type of inpute is only numbers of inpute
 for (let i=0;i<inputtxt.length;i++) {
  if (!((inputtxt.charCodeAt([i])>=48 && inputtxt.charCodeAt([i])<=57)))
  { 
    console.log("Invalid! The input ", inputtxt, " should contain only numbers!");
    validate2 = false;
    break; 
  }
  else {
    validate2= true;
  }
}
 
//this condition for  the inpute should contain at least 2 different types of numbers
 let bol=false ;
 
 for (let i=0;i<inputtxt.length-1;i++){
   if(inputtxt[i]==inputtxt[i+1]){
      bol=false ;
   }
   else{
      bol=true;
      break
   }
 }
 
 if(bol){
 validate3= true;
 }
 else {
   console.log("Invalid! The input", inputtxt , "should contain at least 2 different types of numbers!");validate3= false;
 }
      
      
   //this condition for  the sam of all digits of the inpute  
 let sum=0;
 for(let i=0; i<inputtxt.length;i++){
   sum +=parseInt(inputtxt[i]);
 
 
 }
 
 if(sum <16){
 
   validate4= false;
 
 }
 else{
   validate4= true;}
    
   //this foreven condition
   
if(inputtxt.charCodeAt(inputtxt.length-1)%2!=0){
  console.log("Invalid! The input ",inputtxt, "the last digit should contain even number!");
  validate5= false;

    } 
    else{
validate5= true;
    }
 
 // this if all condions is right
 if (validate1&&validate2&&validate3&&validate4){
   console.log("Success! The input", inputtxt ,"is a valid credit card number!ok");
 }
 
 }
 
 validateCreditNumber('a92332119c011112');
 validateCreditNumber('4444444444444444');
 validateCreditNumber('6666666666661666');
 
 
 