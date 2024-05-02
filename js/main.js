// import playGuitar from "./modules.js";
// import { shredding as shred, plucking as fingerpicking } from "./modules.js";
import User from "./user.js";
import * as Guitars from "./modules.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
const me = new User("hot@gmail.com", "Sergei");
console.log(me);
console.log(me.greeting());

//  ForEach()
import { posts } from "./posts.js";

// posts.forEach((post) => {
//   console.log(post);
// });

// const filteredPosts = posts.filter((post) => {
//   return post.userId === 1;
// });
// console.log(filteredPosts);

// const mappedPosts = filteredPosts.map((post) => {
//   return post.id * 10;
// });
// console.log(mappedPosts);

// const reducedPosts = mappedPosts.reduce((sum, post) => {
//   return sum + post;
// });
// console.log(reducedPosts);

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });
// DOM - Document Object Model

// div.addEventListener("click", (event) => {
//   div.style.backgroundColor = "purple";
// });
// const makeError = () => {
//   let i = 1;
//   while (i <= 5) {
//     try {
//       if (i % 2 !== 0) {
//         throw new Error("odd number");
//       }
//       console.log("Even number");
//     } catch (err) {
//       console.error(err.stack);
//     } finally {
//       console.log("....finally");
//       i++;
//     }
//   }
// };
// makeError();

// function customError(message) {
//   this.message = message;
//   this.name = "customError";
//   this.stack = `${this.name}: ${this.message}`;
// }

// JSON : Javascript Object Notation
// JSON is used to spend and recieve data.
// JSON is a text format that is completely language independent.
// Meaning JSON is used to send & resieve data in many languages... not just in Javascript.

// const myObj = {
//   name: "Dave",
//   hobbies: ["eat", "sleep", "code"],
//   hello: function () {
//     console.log("Hello");
//   },
// };

// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();

// const sendJSON = JSON.stringify(myObj);
// console.log(sendJSON);
// console.log(typeof sendJSON);

// const recieveJSON = JSON.parse(sendJSON);
// console.log(recieveJSON);

// Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Backing a ${size} ${crust} crust pizza`),
//   };
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();

// class Pizza {
//   crust = "original";
//   #sauce = "tradirional";
//   #size;
//   constructor(pizzaSize) {
//     this.#size = pizzaSize;
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   hereYouGo() {
//     console.log(
//       `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
//     );
//   }
// }
// const myPizza = new Pizza("large");
// myPizza.hereYouGo();
// console.log(myPizza.crust);

// class SpecialPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// const mySpecialP = new SpecialPizza("medium");
// mySpecialP.slice();
// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "John Paul James",
//   drums: "John Bonham",
// };
// destructuring objects
// console.log(myNewNameForThat);

// function sings({ vocals }) {
//   return `${vocals} sings!`;
// }
// console.log(sings(band));
// delete band.bass;
// console.log(band.hasOwnProperty("bass"));
// console.log(Object.keys(band));
// console.log(Object.values(band));
// for (let job in band) {
//   console.log(band[job]);
//   console.log(`On ${job}, it's ${band[job]}!`);
// }

//----------- Game rock, paper, or scissors -----------
// const initGame = () => {
//   const startGame = confirm("Shall we play rock, paper or scissors?");
//   startGame ? playGame() : alert("Ok, may be next time.");
// };

// const playGame = () => {
//   while (true) {
//     l et playerChoice = getPlayerChoice();
//     playerChoice = formatPlayerChoice(playerChoice);
//     if (playerChoice === "") {
//       invalidChoice();
//       continue;
//     }
//     if (!playerChoice) {
//       decidedNotToPlay();
//       break;
//     }
//     playerChoice = evaluatePlayerChoice(playerChoice);
//     if (!playerChoice) {
//       invalidChoice();
//       continue;
//     }
//     const computerChoice = getComputerChoice();
//     const result = determineWinner(playerChoice, computerChoice);
//     displayResult(result);
//     if (askToPlayAgain()) {
//       continue;
//     } else {
//       thanksForPlaying();
//       break;
//     }
//   }
// };
// const getPlayerChoice = () => {
//   return prompt("please enter rock, paper, or scissors.");
// };
// const formatPlayerChoice = (playerChoice) => {
//   if (playerChoice || playerChoice === "") {
//     return playerChoice.trim().toLowerCase();
//   } else {
//     return false;
//   }
// };
// const decidedNotToPlay = () => {
//   alert("I guess you changed your mind. Maybe next time.");
// };

// const evaluatePlayerChoice = (playerChoice) => {
//   if (
//     playerChoice === "rock" ||
//     playerChoice === "paper" ||
//     playerChoice === "scissors"
//   ) {
//     return playerChoice;
//   } else {
//     return false;
//   }
// };
// const invalidChoice = () => {
//   alert("You didn't enter rock, paper, or scissors.");
// };

// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   const rpsArray = ["rock", "paper", "scissors"];
//   return rpsArray[randomNumber];
// };
// const determineWinner = (player, computer) => {
//   const winner =
//     player === computer
//       ? "tie game!"
//       : player === "rock" && computer === "paper"
//       ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
//       : player === "paper" && computer === "scissors"
//       ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
//       : player === "scissors" && computer === "rock"
//       ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
//       : `player: ${player}\nComputer: ${computer}\nPlayer wins!`;
//   return winner;
// };
// const displayResult = (result) => {
//   alert(result);
// };
// const askToPlayAgain = () => {
//   return confirm("Play Again?");
// };
// const thanksForPlaying = () => {
//   alert("Ok, thanks for playing.");
// };
// initGame();
// ------------- the end of the code of the Game rock, paper, or scissors

// const myArray = [];
// // add elements to an array
// myArray[0] = "Sergei";
// myArray[1] = 101;
// myArray[2] = false;
// myArray[3] = true;
// myArray[4] = "no one";
// // refer to an array

// myArray.splice(1, 0, "New thing here");
// console.log(myArray);

// const firstArrayA = ["a", "b", "c"];
// const firstArrayB = ["d", "e", "f"];
// const secondArray1 = ["w", "s", "x"];
// const secondArray2 = ["m", "h", "v"];

// const firstItem = [firstArrayA, firstArrayB];
// const secondItem = [secondArray1, secondArray2];
// console.log(firstItem);
// console.log(firstItem[0][0]);
// console.log(secondItem[1][2]);

// const newAr = letterArrayA.concat(letterArrayB);
// const newAr = [...letterArrayA, ...letterArrayB];
// console.log(newAr);

// const letterArray = ["a", "b", "c", "d", "e", "f"];

// const newletterArray = letterArray.join();

// console.log(newletterArray);
// const arrayAgain = newletterArray.split(",");
// console.log(arrayAgain);

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(9, 6));
// // const getUserNameFrom = (email) => {...}
// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("hotshotguy@yandex.ru"));
// // let names = "Serguna";

// const toProperCase = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };
// console.log(toProperCase("fegerALLto"));

// let counter = 0;
// let myLetter;
// while (counter <= 4) {
//   myLetter = names[counter];
//   console.log(myLetter);
//   if (counter === 1) {
//     counter += 2;
//     continue;
//   }
//   if (myLetter === "r") break;
//   counter++;
// }
// console.log(counter);
