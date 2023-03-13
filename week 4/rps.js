//let clicks=document.querySelectorAll('.buttonContainer');
//        clicks.forEach((button) => {
//        button.addEventListener("click", console.log (1));})


(function() {
    document.body.addEventListener("click", clickButtons);
   
    function clickButtons(e) {
      const from = e.target;
      console.log(1);
      if (!from.className || !/button--\d/i.test(from.className)) { return; }
      // ^check if the element clicked is one of the elements you want to handle 
      //  if it's not one of the 'buttons', do nothing
      console.log("you clicked " + from.classList);
    }
  }())
        