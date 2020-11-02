// FUNCTIONS EXERCISE

// 1
function spookyGhost(){
    console.log("Boo!!!");
}

spookyGhost();
  
// 2
function candy(goal){
    console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
}
candy(`Get Candy`)

// 3
function werewolf(a, b){
    if (a === "Full" && b === "Moon"){
      console.log("ARH-WOOO!");
    }
  }
  werewolf("Full", "Moon");

//   4
function halloween(){
    return `October 31st`;
  }
console.log(halloween());

// 5
function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    } else {
        return false;
    }
}
console.log(isEnoughCandy(31));

// 6
function candyCounter(num){
    let total = 0;
    for (n of num) {
      total = total + n;
    }
    return total;
}
candyCounter([2, 3, 4, 5]);
candyCounter([2, 3, 4, 5, 6 ,6]);

// 7
const hauntedMansion = function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
  }
  hauntedMansion();
  
  // 8
  const ghostbusters = () => ("Who You Gonna Call?")

  console.log(ghostbusters());
  
  // 9
  // No
  
  // 10
  // Yes
  
  // 11a
  const costumes = [`Ghost`, `Hobo`, `Superman`];
  
//   11b
  const upperCostumes = costumes.map(function (parameter){
     return parameter.toUpperCase();
  });
  
  console.log(upperCostumes);
  
  
  // SWITCH AND TERNARY