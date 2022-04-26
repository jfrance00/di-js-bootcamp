const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
  
let userNameArr = [];
gameInfo.forEach(element => userNameArr.push(`${element.username}!`));

console.log(userNameArr);


let winners = [];
gameInfo.forEach(element => element.score > 5 ? winners.push(element.username) : console.log(`${element.username} not top player`));

console.log(winners);


let scoreTotal = 0; 
for (let i = 0; i < gameInfo.length; i++){
    scoreTotal = scoreTotal + gameInfo[i].score;
}
console.log(scoreTotal);


