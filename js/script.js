// welcomeSpeech();
console.log("Hello World!");

// call the function to welcome speech
function welcomeSpeech() {
    let username = prompt("What's your name?");
    if (username != '') {
        document.getElementById("user-greeting").textContent = username;
    }
}

// Function to send message
function sendMessage() {
    let message = document.getElementById("user-message").value;
    if (message != '') {
        alert("Message sent: " + message.value);
    } else {
        alert("Please enter a message before sending.");
    }

}
