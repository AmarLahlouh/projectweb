const selectBox = document.querySelector(".select-box"),
  selectBtnX = selectBox.querySelector(".options .playerX"),
  selectBtnO = selectBox.querySelector(".options .playerO"),
  playBoard = document.querySelector(".play-board"),
  players = document.querySelector(".players"),
  allBox = document.querySelectorAll("section span"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-text"),
  replayBtn = resultBox.querySelector("button");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    //add onclick attribute for all the spans in the section
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

selectBtnX.onclick = () => {
  selectBox.classList.add("hide"); //hide select box when i click on player X
  playBoard.classList.add("show"); //show the playboard section on playerX button clicked
};

selectBtnO.onclick = () => {
  selectBox.classList.add("hide"); //hide select box when i click on player X
  playBoard.classList.add("show"); //show the playboard section on playerX button clicked
  players.setAttribute("class", "players active player"); //adding three class names in player element
};

let playerXIcon = "fa fa-close", //class name of fontawesome cross icon
  playerOIcon = "fa fa-circle-o", //class name of fontawesome circle icon
  playerSign = "X",
  runBot = true;

function clickedBox(element) {
  //if players element has contains .player

  if (players.classList.contains("player")) {
    playerSign = "O"; //if player will be o then we will change the sign
    element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding O icons
    players.classList.remove("active");
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`;
    element.setAttribute("id", playerSign);
    players.classList.add("active");
  }
  selectWinner();
  element.style.pointerEvents = "none"; //when the user select any box then that box cannot be selected again
  playBoard.style.pointerEvents = "none";
  let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot(runBot);
  }, randomTimeDelay); //passing random delay time
}

function bot() {
  let array = []; //creating an empty array to store unselected box index in this array
  if (runBot) {
    //first change the player sign .. so if user has x value in id the bot will have o
    playerSign = "O";
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        //if the span has no child element l2nu ana bas 23mol click byn7t b al span icon m btkun fadye
        array.push(i); //push the index of span to the array which is empty not clicked
      }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]; //getting a random index from array so bot will select random unselected boxes
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        //if players element has contains .player
        playerSign = "X";
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        allBox[randomBox].setAttribute("id", playerSign);
        players.classList.add("active");
      } else {
        //if the user is o then the box id value will be x
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id", playerSign);
      }
      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto"; //once bot select any box then the user cannot select or click on that box
    playerSign = "X";
  }
}

function getIdVal(classname) {
  return document.querySelector(".box" + classname).id; //return the id
}
function checkIdSign(val1, val2, val3, sign) {
  if (
    getIdVal(val1) == sign &&
    getIdVal(val2) == sign &&
    getIdVal(val3) == sign
  ) {
    return true;
  }
}
function selectWinner() {
  if (
    checkIdSign(1, 2, 3, playerSign) ||
    checkIdSign(4, 5, 6, playerSign) ||
    checkIdSign(7, 8, 9, playerSign) ||
    checkIdSign(1, 4, 7, playerSign) ||
    checkIdSign(2, 5, 8, playerSign) ||
    checkIdSign(3, 6, 9, playerSign) ||
    checkIdSign(1, 5, 9, playerSign) ||
    checkIdSign(3, 5, 7, playerSign)
  ) {
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      resultBox.classList.add("show");
      playBoard.classList.remove("show");
    }, 700); //after 0.7secs the result will be shown
    wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
  } else {
    if (
      getIdVal(1) != "" && //if the id is not empty
      getIdVal(2) != "" &&
      getIdVal(3) != "" &&
      getIdVal(4) != "" &&
      getIdVal(5) != "" &&
      getIdVal(6) != "" &&
      getIdVal(7) != "" &&
      getIdVal(8) != "" &&
      getIdVal(9) != ""
    ) {
      runBot = false;
      bot(runBot);
      setTimeout(() => {
        resultBox.classList.add("show");
        playBoard.classList.remove("show");
      }, 700);
      wonText.textContent = "Match has been drawn!";
    }
  }
}

replayBtn.onclick = () => {
  window.location.reload();
};
