// const cells = document.querySelectorAll(".cell");
// let turn = true;
// let usedCells;
// const winCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 8],
// ];
// let player1 = {
//   symbol: '<i class="fa fa-close"></i>',
//   played: [],
//   score: 0,
// };
// let player2 = {
//   symbol: '<i class="fa fa-circle-o"></i>',
//   played: [],
//   score: 0,
// };

// for (let i = 0; i < 9; i++) {
//   cells[i].addEventListener("click", () => {
//     if (isEmpty(i)) {
//       if (turn) {
//         addSymbol(player1, i);
//         checkWins(player1);
//         turn = false;
//       } else {
//         addSymbol(player2, i);
//         checkWins(player2);
//         turn = true;
//       }
//     } else {
//       alert("choose an emppty cell");
//     }
//   });
// }

// function addSymbol(player, i) {
//   cells[i].innerHTML = player.symbol;
//   player.played.push(i);
//   usedCells.push(i);
// }
// function checkWins(player) {
//   winCombos.some((combo) => {
//     if (combo.every((index) => player.played.include(index))) {
//       alert("you won");
//     }
//   });
// }

// function isEmpty(i) {
//   if (usedCells.includes(i)) {
//     return false;
//   }
//   return true;
// }

// //selecting all required elements

// const selectBox = document.querySelector(".select-box");
// SelectXBtn = selectBox.querySelector(".playerX");
// SelectOBtn = selectBox.querySelector(".playerO");
// playBoard = document.querySelector(".play-board");
// allBox = document.querySelectorAll("section span");
// players = document.querySelector(".players");
// window.onload = () => {
//   //once window loaded

//   for (let i = 0; i < allBox.length; i++) {
//     //add onclick attribute for all the spans in the section
//     allBox[i].setAttribute("onclick", "clickedBox(this)");
//   }
//   SelectXBtn.onclick = () => {
//     selectBox.classList.add("hide"); //hide select box when i click on player X
//     playBoard.classList.add("show"); //show the playboard section on playerX button clicked
//   };

//   SelectOBtn.onclick = () => {
//     selectBox.classList.add("hide"); //hide select box when i click on player X

//     playBoard.classList.add("show"); //show playboard section on playerO button clicked
//     players.setAttribute("class", "players active player"); //adding three class names in player element
//   };
// };

// let playXIcon = "fa fa-close"; //class name of fontawesome cross icon
// let playerOIcon = "fa fa-circle-o"; //class name of fontawesome circle icon
// let playerSign = "x"; //suppose player will be x
// //user click function
// function clickedBox(element) {
//   if (players.classList.contains("player")) {
//     //if players element has contains .player
//     playerSign = "o"; //if player will be o then we will change the sign
//     element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding O icons
//     players.classList.add("active");
//     //if player select o then we will change the playerSign value to o
//     playerSign = "o";
//     element.setAttribute("id", playerSign);
//   } else {
//     element.innerHTML = `<i class="${playXIcon}"></i>`; //adding circle icon
//     players.classList.add("active");
//     element.setAttribute("id", playerSign);
//   }
//   selectWinner(); //calling the winner
//   element.style.pointerEvents = "none"; //when the user select any box then that box cannot be selected again
//   let randomDelayTime = (Math.random() * 1000 + 200).toFixed(); //generating random time delay so bot will delay randomly
//   setTimeout(() => {
//     bot();
//   }, randomDelayTime); //passing random delay time
// }

// //bot click function

// function bot() {
//   //first change the player sign .. so if user has x value in id the bot will have o
//   playerSign = "o";
//   let array = []; //creating an empty array to store unselected box index in this array
//   for (let i = 0; i < allBox.length; i++) {
//     if (allBox[i].childElementCount == 0) {
//       //if the span has no child element l2nu ana bas 23mol click byn7t b al span icon m btkun fadye
//       array.push(i); //push the index of span to the array which is empty not clicked
//     }
//   }
//   let randomBox = array[Math.floor(Math.random() * array.length)]; //getting a random index from array so bot will select random unselected boxes
//   if (array.length > 0) {
//     if (players.classList.contains("player")) {
//       //if players element has contains .player
//       allBox[randomBox].innerHTML = `<i class="${playXIcon}"></i>`; //adding cross icons
//       players.classList.remove("active");
//       //if the user is o then the box id value will be x
//       playerSign = "x";
//       allBox[randomBox].setAttribute("id", playerSign);
//     } else {
//       allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`; //adding o icon
//       players.classList.remove("active");
//       allBox[randomBox].setAttribute("id", playerSign);
//     }
//   }
//   allBox[randomBox].style.pointerEvents = "none"; //once bot select any box then the user cannot select or click on that box
// }

// //we will workm on the winner
// function getClass(idname) {
//   return document.querySelector(".box " + idname).id; //returning idname
// }

// function checkClasses(val1, val2, val3, sign) {
//   if (
//     getClass(val1) == sign &&
//     getClass(val2) == sign &&
//     getClass(val3) == sign
//   ) {
//     return true;
//   }
// }

// function selectWinner() {
//   //One combination of them matched then select the winner
//   if (
//     checkClasses(1, 2, 3, playerSign) ||
//     checkClasses(4, 5, 6, playerSign) ||
//     checkClasses(6, 7, 8, playerSign) ||
//     checkClasses(1, 4, 7, playerSign) ||
//     checkClasses(2, 5, 8, playerSign) ||
//     checkClasses(3, 6, 9, playerSign) ||
//     checkClasses(1, 5, 9, playerSign)
//   )
//     console.log(playerSign + " " + "is the winner");
// }
// //selecting all required elements

// const selectBox = document.querySelector(".select-box");
// SelectXBtn = selectBox.querySelector(".playerX");
// SelectOBtn = selectBox.querySelector(".playerO");
// playBoard = document.querySelector(".play-board");
// allBox = document.querySelectorAll("section span");
// players = document.querySelector(".players");
// window.onload = () => {
//   //once window loaded

//   for (let i = 0; i < allBox.length; i++) {
//     //add onclick attribute for all the spans in the section
//     allBox[i].setAttribute("onclick", "clickedBox(this)");
//   }
//   SelectXBtn.onclick = () => {
//     selectBox.classList.add("hide"); //hide select box when i click on player X
//     playBoard.classList.add("show"); //show the playboard section on playerX button clicked
//   };

//   SelectOBtn.onclick = () => {
//     selectBox.classList.add("hide"); //hide select box when i click on player X

//     playBoard.classList.add("show"); //show playboard section on playerO button clicked
//     players.setAttribute("class", "players active player"); //adding three class names in player element
//   };
// };

// let playXIcon = "fa fa-close"; //class name of fontawesome cross icon
// let playerOIcon = "fa fa-circle-o"; //class name of fontawesome circle icon
// let playerSign = "x"; //suppose player will be x
// //user click function
// function clickedBox(element) {
//   if (players.classList.contains("player")) {
//     //if players element has contains .player
//     playerSign = "o"; //if player will be o then we will change the sign
//     element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding O icons
//     players.classList.add("active");
//     //if player select o then we will change the playerSign value to o
//     playerSign = "o";
//     element.setAttribute("id", playerSign);
//   } else {
//     element.innerHTML = `<i class="${playXIcon}"></i>`; //adding circle icon
//     players.classList.add("active");
//     element.setAttribute("id", playerSign);
//   }
//   selectWinner(); //calling the winner
//   element.style.pointerEvents = "none"; //when the user select any box then that box cannot be selected again
//   let randomDelayTime = (Math.random() * 1000 + 200).toFixed(); //generating random time delay so bot will delay randomly
//   setTimeout(() => {
//     bot();
//   }, randomDelayTime); //passing random delay time
// }

// //bot click function

// function bot() {
//   //first change the player sign .. so if user has x value in id the bot will have o
//   playerSign = "o";
//   let array = []; //creating an empty array to store unselected box index in this array
//   for (let i = 0; i < allBox.length; i++) {
//     if (allBox[i].childElementCount == 0) {
//       //if the span has no child element l2nu ana bas 23mol click byn7t b al span icon m btkun fadye
//       array.push(i); //push the index of span to the array which is empty not clicked
//     }
//   }
//   let randomBox = array[Math.floor(Math.random() * array.length)]; //getting a random index from array so bot will select random unselected boxes
//   if (array.length > 0) {
//     if (players.classList.contains("player")) {
//       //if players element has contains .player
//       allBox[randomBox].innerHTML = `<i class="${playXIcon}"></i>`; //adding cross icons
//       players.classList.remove("active");
//       //if the user is o then the box id value will be x
//       playerSign = "x";
//       allBox[randomBox].setAttribute("id", playerSign);
//     } else {
//       allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`; //adding o icon
//       players.classList.remove("active");
//       allBox[randomBox].setAttribute("id", playerSign);
//     }
//   }
//   allBox[randomBox].style.pointerEvents = "none"; //once bot select any box then the user cannot select or click on that box
// }

// //we will workm on the winner
// function getClass(idname) {
//   return document.querySelector(".box " + idname).id; //returning idname
// }

// function checkClasses(val1, val2, val3, sign) {
//   if (
//     getClass(val1) == sign &&
//     getClass(val2) == sign &&
//     getClass(val3) == sign
//   ) {
//     return true;
//   }
// }

// function selectWinner() {
//   //One combination of them matched then select the winner
//   if (
//     checkClasses(1, 2, 3, playerSign) ||
//     checkClasses(4, 5, 6, playerSign) ||
//     checkClasses(6, 7, 8, playerSign) ||
//     checkClasses(1, 4, 7, playerSign) ||
//     checkClasses(2, 5, 8, playerSign) ||
//     checkClasses(3, 6, 9, playerSign) ||
//     checkClasses(1, 5, 9, playerSign)
//   )
//     console.log(playerSign + " " + "is the winner");
// }
