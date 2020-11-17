const drinkTray=[];
const drinkTypes = ['cola', 'lemonade', 'water'];
for(let i = 0; i <= 4;i++) {
  if (i === 0 || i === 1) {
    drinkTray.push(drinkTypes[0]);
  } else if (i === 2 || i === 3) {
    drinkTray.push(drinkTypes[1]);
  } else {
    drinkTray.push(drinkTypes[2]);
  }
}
console.log("Hey guys, I brought " + drinkTray.join(", ") + "!");

