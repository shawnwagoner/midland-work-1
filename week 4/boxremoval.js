//! Steps:

//! Grab all of the red divs

//! Add a click event listener to them

//! Figure out which red div was clicked

//! Find a way to correspond the red div to the matching orange div

//! See if the orange div is there or not

//! If it is, change it to display: none;

//! if it's not, change it to display: block;


      let leftDivs=document.querySelectorAll('.leftDiv');
        leftDivs.forEach((div) => {
        div.addEventListener("click", removeBox);})

       function removeBox(event) {
        let clickedDiv = event.target
        let id= "r" + clickedDiv.innerText;
        let rightDiv = document.getElementById(id);

        if (rightDiv.style.display === "none"){
            rightDiv.style.display = "block";}
            else{ rightDiv.style.display = "none"}

        }
     