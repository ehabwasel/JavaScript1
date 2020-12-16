//first way

function giveCompliment(name){
  const compliments=["great","awaiswm","good","verygood","exellent","smart ","strong","courageous","sunshine ","Goodlooking","INTELGENT"];
  let rand = compliments[Math.floor(Math.random()*10)]
  return console.log(name, "! You Are" ,rand)
}
giveCompliment('ehab')
giveCompliment('jasper')
giveCompliment('fedde')

//second way

function giveCompliment(name) {
  const compliments=["great","awaiswm","good","verygood","exellent","smart ","strong","courageous","sunshine ","Goodlooking","INTELGENT"];
  let rand= compliments[Math.random() * compliments.length | 0];

  // Note how the parameter "name" is passed here:
  return console.log(name, "! You Are" ,rand)
}

giveCompliment('ehab')
giveCompliment('jasper')
giveCompliment('fedde')