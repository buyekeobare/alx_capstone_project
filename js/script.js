/*=============== toggle icon navbar ================*/
const menu = document.getElementById("menu");

function openmenu(){
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-200px";
}


/*=============== sticky bar ================*/
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


/*=============== Contact Form validation ================*/

// Get references to the form, name input, and email input

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email_id");

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






 


    


    
  
      

    

    










