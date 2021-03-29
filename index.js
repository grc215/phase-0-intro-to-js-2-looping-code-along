// Code your solutions in this file
const names = ["lisa", "Kaitlin", "Jan"];
let bDayCard = []
function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    //debugger;
    bDayCard.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }

  return bDayCard;
}

writeCards(names); 