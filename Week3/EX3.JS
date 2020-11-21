const numChildren = [1,2,3,4];
const partnerNames = ["Asmaa","lila","Smer","Yasmin"];
const locations = ["Amsterdam","Roterdam","Utrcht","Almere"];
const jobs = ["Teacher","Farmer","Driver","Doctor"];
function tellFortune(numChildren, partnerNames, locations, jobs){

  let rand1= numChildren [Math.random() * numChildren.length | 0];
  let rand2= partnerNames [Math.random() * partnerNames.length | 0];
  let rand3= locations [Math.random() * locations.length | 0];
  let rand4= jobs [Math.random() * jobs.length | 0];
  return  console.log("You will be a" ,rand4 , "in ",rand3,"married to", rand2,"with ",rand1,"kids.");
}
tellFortune(numChildren, partnerNames, locations, jobs);