/*=============== toggle icon navbar ================*/
const menu = document.getElementById("menu");

function openmenu(){
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-200px";
}

    /*const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const submit = document.getElementById("submit");

    submit.addEventListener('click', (e) =>{
        e.preventDefault();
        
        if(name.value.trim() == ""){
            error(name, "name cannot be empty");
        }
    })

    function error(element, msg){
        element.style.border = "1px solid #ff0000";
    }*/

   window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
   })
      

    

    










