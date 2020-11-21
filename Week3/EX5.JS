const cartForParty = {
  cheps:1.7,
  orange:2.5,
  apple:1.5,
  fish:3.1,
  meat:3.25,
};

  
  function calculateTotalPrice()
  {
     let totalPrice =0;
    for(key in cartForParty){
      totalPrice +=(+cartForParty[key]);
   
    }
    console.log("Total: €" , totalPrice);
  }
  
calculateTotalPrice()
//another way
const cartForParty = {
  cheps:1.7,
  orange:2.5,
  apple:1.5,
  fish:3.1,
  meat:3.25,
};

  
  function calculateTotalPrice()
  {
     let totalPrice =cartForParty.cheps+cartForParty.orange+cartForParty.apple+cartForParty.fish+cartForParty.meat;
    for(let i=0; cartForParty.length<=5 ;i++){
      
   
    }
    console.log("Total: €" , totalPrice);
  }
  
calculateTotalPrice()