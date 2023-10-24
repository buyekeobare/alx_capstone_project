/*=============== toggle icon navbar ================*/
const menu = document.getElementById("menu");

function openmenu(){
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-200px";
}

const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("mesage");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phone.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

}


    

    










