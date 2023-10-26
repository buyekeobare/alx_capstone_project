/*=============== sticky bar ================*/
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


/*=============== toggle icon navbar ================*/
const menu = document.getElementById("menu");

function openmenu(){
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-200px";
}


/*=============== Contact Form validation ================*/

// Get references to the form, name and email inputs

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");

  // Add an event listener to the form element to handle form submission.

  form.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // Retrieve the values entered in the form fields and trim to remove whitespaces.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Perform form validation.
    if (validateForm(name, email)) {
      // Display a success message.
      const successMessage = document.createElement("p");
      successMessage.textContent = "Message sent successfully!";
      successMessage.style.color = "green";
      form.appendChild(successMessage);
    } else {
      // Display an error message.
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Please fill all required fields.";
      errorMessage.style.color = "red";
      form.appendChild(errorMessage);
    }
  });

  // Function to validate the form fields.

  function validateForm(name, email) {
    if (name === "" || email === "") {
      return false; // Name or email is empty
    }

    // Additional validation logic can be added here if needed.

    return true; // All required fields are filled
  }
});

// Function to validate the email format

function validateForm(email) {
  // Define a regular expression pattern for a valid email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the email matches the pattern
  return emailRegex.test(email);
}







//NOT responding

/*===============Active Contact Form using emailjs================*/

/*const form = document.querySelector("#form");
const contactBtn = document.querySelector(".contact-btn");
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "SEudP2FCdOsRmBQqo";
const serviceID = "service_epo1rot";
const templateID = "template_2enhdj5"

emailjs.init(publicKey);

form.addEventListener("submit", e => {
    e.preventDefault();

    contactBtn.innerText = "Just A Moment...";
    
    const inputFields = {
        fullName: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,

    }
    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        contactBtn.innerText = "Message Sent Successfully"; 

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error);

         contactBtn.innerText = "Something went wrong";
    })
})*/











 


    


    
  
      

    

    










