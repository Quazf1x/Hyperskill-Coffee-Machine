const input = require('sync-input');

let supplies = { water: 400, milk: 540, beans:120, cups:9, money:550};

let coffeeTypes = [
  //espresso 
  { water:250, milk:0, beans:16, cups:1, money:4 },
  //latte
  { water:350, milk:75, beans:20, cups:1, money: 7},
  //cappuccino
  { water:200, milk:100, beans:12, cups:1, money: 6} ];

function printOutSupplies(){
  console.log(`\nThe coffee machine has:
      ${supplies.water} ml of water
      ${supplies.milk} ml of milk
      ${supplies.beans} g of coffee beans
      ${supplies.cups} disposable cups
      $${supplies.money} of money\n`);
          }

  function makeCoffee(userCoffee) {
      
          userCoffee -= 1;
          if (supplies.water < coffeeTypes[userCoffee].water) {
              console.log("Sorry, not enough water!");
          } else if (supplies.milk < coffeeTypes[userCoffee].milk) {
              console.log("Sorry, not enough milk!");
          } else if (supplies.beans < coffeeTypes[userCoffee].beans) {
              console.log("Sorry, not enough coffee beans!");
          } else if (supplies.cups < coffeeTypes[userCoffee].cups) {
              console.log("Sorry, not enough cups!");
          } else {
            console.log("\nI have enough resources, making you a coffee!\n");
                  supplies.water -= coffeeTypes[userCoffee].water;
              supplies.milk -= coffeeTypes[userCoffee].milk;
              supplies.beans -= coffeeTypes[userCoffee].beans;
              supplies.sum += coffeeTypes[userCoffee].cost;
              supplies.cups -= 1;
              supplies.money+=coffeeTypes[userCoffee].money;
          }
      }

function fillMachine(water, milk, beans, cups){
  supplies.water+=water;
  supplies.milk+=milk;
  supplies.beans+=beans;
  supplies.cups+=cups;
}


let runningStatus = true;

while(runningStatus){
  
let userChoice = input("Write action (buy, fill, take, remaining, exit): \n");

switch(userChoice){
    
  case "buy":
    let userCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - back: \n");
    if(userCoffee!="back")
    makeCoffee(userCoffee);
    break;
    
  case "fill":
  let addWater = Number(input("\nWrite how many ml of water you want to add:\n"));
  let addMilk = Number(input("\nWrite how many ml of milk you want to add:\n"));
  let addBeans = Number(input("\nWrite how many grams of coffee beans you want to add:\n"));
  let addCups = Number(input("\nWrite how many disposable cups you want to add:\n"));
    
  fillMachine(addWater, addMilk, addBeans, addCups);
    break;
    
  case "take":
    console.log(`I gave you ${supplies.money}`);
    supplies.money=0;
    break;

  case "remaining":
        printOutSupplies();
    break;
    
  case "exit":
    runningStatus = false;
    break;
  default:
  console.log("There is no such option.");
    break;
}
}