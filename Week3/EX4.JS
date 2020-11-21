const shoppingCart = ["bananas", "milk"];
function addToShoppingCart(grocery){
  for (let i=0; i<shoppingCart.length;i++ )
  {
    if(shoppingCart.length<3){
      shoppingCart.push(grocery);
      console.log("You bought  ",shoppingCart)
    }
    else{
      shoppingCart.shift();
    }
  }
        }

addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea'); 
addToShoppingCart('Aplle'); 
