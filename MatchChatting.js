//Code for the main class for the Match Chatting feature
//Creating an example chatHistory
let chatHistory = new ChatHistory(["Hi, nice to meet you!", "So, what game do you play the most?"],
    ["Nice to meet you too!", "I play League of Legends most of the time, how about you?"]);

//Load chat history into the page
loadHistory();

//function for loading the chat history when page loads
function loadHistory() {
    let chatLog = document.getElementById("chatLog");

    //this is a simplified loop for appending the messages in the chat log
    for (let i = 0; i < chatHistory.getUserMessagesLength(); i++) {

        //for each message, create a div with an id of either user or match, so they are bound left or right of the div
        //User message
        let userDiv = document.createElement("div");
        userDiv.setAttribute("id", "userMessage");
        userDiv.textContent = chatHistory.getUserMessage(i);
        chatLog.appendChild(userDiv);
        chatLog.appendChild(document.createElement("br"));

        //Match message
        let matchDiv = document.createElement("div");
        matchDiv.setAttribute("id", "matchMessage");
        matchDiv.textContent = chatHistory.getMatchMessage(i);
        chatLog.appendChild(matchDiv);
        chatLog.appendChild(document.createElement("br"));
    }
}

//Function triggered when button is pressed. It will log the text onto the ChatHistory class and send it to the chat log of the page.
function logText() {
    //Instantiating chat history inside chatLog
    let textToBeSent = document.getElementById("textBox").value;

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "userMessage");

    newDiv.textContent = textToBeSent;

    //appending message to the chat log
    chatLog.appendChild(newDiv);

    chatLog.appendChild(document.createElement("br"));

    //logging message into the class chat history
    chatHistory.logUserMessage(textToBeSent);

    //Resetting textbox
    document.getElementById("textBox").value = "";
}
