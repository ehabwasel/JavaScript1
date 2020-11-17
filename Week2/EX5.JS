let Books = [
  {
 title : "book1 ",
 authore : "authore 1",
 alreadyRead:true
 },

{
 title : "book2",
 authore : "auther 2",
 alreadyRead:false
 },

{
 title : "book3",
 authore : "auther 3",
 alreadyRead:true
 }
]
for (let i = 0; i<= 2; i++){
 console.log(Books[i].title + " by " + Books[i].authore);
  if (Books[i].alreadyRead == true){
     console.log("You already read " + '"' +Books[i].title +'"')
 }else{
     console.log("you still need to read "+'"' + Books[i].title + '"')
 }
 
}
