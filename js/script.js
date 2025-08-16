console.log("Hello World!");

// welcomeSpeech();

// call the function to welcome speech();
function welcomeSpeech() {
    let username = prompt("What's your name?");
    if (username != '') {
        document.getElementById("user-greeting").textContent = username;
    }
}

function sendMessage() {
    let message = document.getElementById("user-message").value};
    if (message != '') {
        alert("Message sent: " + message);
    } else {
        alert("Please enter a message before sending.");
    }
    if (birthDate != '') {
        alert("Birth date is: " + birthDate);
    } else {
        alert("Please enter your birth date.");
    }
    if (gender != '') {
        alert("Gender is: " + gender);
    } else {
        alert("Please select your gender.");
    }
    if (username != '') {
        alert("Username is: " + username);
    } else {
        alert("Please enter your username.");
    }
    if (email != '') {
        alert("Email is: " + email);
    } else {
        alert("Please enter your email.");
    }


