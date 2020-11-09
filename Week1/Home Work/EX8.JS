let x ="ehab";
let y ="wasel";
let z ={ sex :"man", status:"maried"};
let f ={ from:"egypt", live:"netherlands"};
console.log(typeof x ,typeof y);
console.log(typeof z ,typeof f);
Types( x ,  y );
Types(  x ,  f );
Types( z ,  x );
Types( f ,  y );
Types( y ,  z );
Types( f,  z );


function Types (first ,second){
  if (typeof first == typeof second )
  {
  
    console.log("the same type !");
  }
  else{
    console.log("not the same type!");
  }
}



