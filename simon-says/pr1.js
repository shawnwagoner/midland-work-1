let cpu = [];
let player = [];
let blink;
let turn;
let correct;
let compTurn;
let intervalId;
let beep = true;
let win;
 
const Left = document.querySelector("#green");
const Right = document.querySelector("#red");
const bl = document.querySelector("#blue");
const br = document.querySelector("#yellow");
const startButton = document.querySelector("#go");
const count = document.querySelector(".num");


startButton.addEventListener(`click`, (event) => {
    if (start || win);{
    play();}
});


function play(){
    win=false;
    cpu=[];
    player=[];
    blink=0;
    intervalId=0;
    turn=1;
    count.innerHTML = 1;
    correct=true;
    for (let i=0; i <=10; i++){
    cpu.push(Math.floor(Math.random() *4) + 1);}
    
    compTurn=true;

    intervalId=setInterval(cpuTurn, 500);
}

    function cpuTurn(){
        
        if (blink==turn){
            clearInterval(intervalId)
            compTurn=false;
            clear();
            start=true;}
        if (compTurn){
            clear();
            setTimeout(() =>{
             if (cpu[blink] == 1) one();
             if (cpu[blink] == 2) two();
             if (cpu[blink] == 3) three();
             if (cpu[blink] == 4) four();
             blink ++; 
            }, 200);
        }
    }
    

    function one(){
        if (beep){
            let audio=document.getElementById("sound1");
            audio.play();
            }
            beep=true;
            Left.style.backgroundColor="Lime";
    }

    function two(){
        if (beep){
            let audio=document.getElementById("sound2");
            audio.play();
            }
            beep=true;
            Right.style.backgroundColor= "Coral";
    }

    function three(){
            if (beep){
                let audio=document.getElementById("sound3");
                audio.play();
                }
                beep=true;
                bl.style.backgroundColor= "DeepSkyBlue";
    }

    function four(){
            if (beep){
                let audio=document.getElementById("sound4");
                audio.play();
                }
                beep=true;
                br.style.backgroundColor="rgb(233, 233, 194)";
    }

    function clear(){
        Left.style.backgroundColor= "darkgreen";
        Right.style.backgroundColor= "darkred";
        bl.style.backgroundColor="darkblue";
        br.style.backgroundColor="yellow";
    }

    function blinking() {
        Left.style.backgroundColor = "Lime";
        Right.style.backgroundColor = "Coral";
        bl.style.backgroundColor = "DeepSkyBlue";
        br.style.backgroundColor = "rgb(233, 233, 194)";
      }


      Left.addEventListener('click', (event) => {
        if (start) {
          player.push(1);
          check();
          one();
          if(!win) {
            setTimeout(() => {
              clear();
            }, 300);
          }
        }
      })
      
      Right.addEventListener('click', (event) => {
        if (start) {
          player.push(2);
          check();
          two();
          if(!win) {
            setTimeout(() => {
              clear();
            }, 300);
          }
        }
      })
      
      bl.addEventListener('click', (event) => {
        if (start) {
          player.push(3);
          check();
          three();
          if(!win) {
            setTimeout(() => {
              clear();
            }, 300);
          }
        }
      })
      
      br.addEventListener('click', (event) => {
        if (start) {
          player.push(4);
          check();
          four();
          if(!win) {
            setTimeout(() => {
              clear();
            }, 300);
          }
        }
      })
      
      function check() {
        if (player[player.length - 1] !== cpu[player.length - 1])
          correct = false;
      
        if (player.length == 5 && correct) {
          winGame();
        }
      
        if (correct == false) {
          blinking();
          count.innerHTML = "NO!";
          setTimeout(() => {
            count.innerHTML = turn;
            clear();
        }, 800);
      
          beep = false;
        }
      
        if (turn == player.length && correct && !win) {
          turn++;
          player = [];
          compTurn = true;
          blink = 0;
          count.innerHTML = turn;
          intervalId = setInterval(cpuTurn, 800);
        }
      
      }
      
      function winGame() {
        blinking();
        count.innerHTML = "WIN!";
        start = false;
        win = true;
      }