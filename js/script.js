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
    let message = document.getElementById("user-message").value;
    if (message != '') {
        alert("Message sent: " + message);
    } else {
        alert("Please enter a message before sending.");
    }
}
