let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-button");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");


let turnO = true;

const winpattren = [
   [0, 1, 2],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];


const resetGame = () => {
   turnO = true;
   enableBoxes();
   msgcontainer.classList.add("hide");


};


boxes.forEach((box) => {
   box.addEventListener("click", () => {
      console.log("box was clicked");
      if (turnO) {
         box.innerText = "O";
         turnO = false;
      } else {
         box.innerText = "X";
         turnO = "true";

      }

      box.disabled = true;

      checkwinner();

   });

});

const disableBoxes = () => {
   for (let box of boxes) {
      box.disabled = true;
   }
}

const enableBoxes = () => {
   for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
   }
}

const showWinner = (winner) => {
   msg.innerText = `Congratulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disableBoxes();

}




const checkwinner = () => {
   for (let Pattren of winpattren) {

      let pos1val = boxes[Pattren[0]].innerText;;
      let pos2val = boxes[Pattren[1]].innerText;
      let pos3val = boxes[Pattren[2]].innerText;

      if (pos1val != "" && pos2val != "" && pos3val != "") {
         if (pos1val === pos2val && pos2val === pos3val) {
            console.log("winner", pos1val);

            showWinner(pos1val);
         }


      }
   }

};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);





