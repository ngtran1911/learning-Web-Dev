// How to accept user input
let age;
let username;

//1. easy = window prompt
//age = window.prompt("what is your age")

//2. professional way = html text box 
document.getElementById("button").onclick = function() {
    username = document.getElementById("input-box").value;
    document.getElementById("welcom").textContent = `Hello ${username}`;
    console.log(username);
}


