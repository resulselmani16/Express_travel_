var testLog = document.getElementById("myLogForm");
testLog.style.display = "none";

var test = document.getElementById("myForm");
test.style.display = "none";

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



function openLogForm(){
    document.getElementById("myLogForm").style.display = "block";
}

function closeLogForm() {
    document.getElementById("myLogForm").style.display = "none";
}


let sendMessage = (message) =>{
var sentMessage = document.getElementById('sent')

var chatContainer = document.createElement('div')
chatContainer.setAttribute('class', 'chat-container')
sentMessage.appendChild(chatContainer)

let username = document.createElement('h6')
username.setAttribute('class', 'chat-user')
username.innerHTML = "ME"
chatContainer.appendChild(username)

let lineBreak = document.createElement('br')
chatContainer.appendChild(lineBreak)

let mesazhi = document.createElement('h6')
mesazhi.setAttribute('class', 'mesazhi')
mesazhi.innerHTML = message
chatContainer.appendChild(mesazhi)

let lineBreak1 = document.createElement('br')
sentMessage.appendChild(lineBreak1)
let lineBreak2 = document.createElement('br')
chatContainer.appendChild(lineBreak2)
let lineBreak3 = document.createElement('br')
chatContainer.appendChild(lineBreak3)

}


