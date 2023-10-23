/*=============== toggle icon navbar ================*/
const menu = document.getElementById("sidemenu");

function openmenu(){
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-200px";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])

    ){
        $name = $_POST ["name"];
        $name = $_POST ["email"];
        $name = $_POST ["phone"];
        $name = $_POST ["subject"];
        $name = $_POST ["message"];

        $to = "buyeke@gmail.com";
        $subject = "New Conatct Form Submission";
        $body = "Name : {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $header = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {
            alert ("Message sent successfully!");

        } else {
            alert ("Failed to send message.");
        }
    }

}


