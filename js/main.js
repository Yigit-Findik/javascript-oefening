console.log("Hello World!")

function mijnFunctie(){
    console.log("hey ik word uitgevoerd als er op button word geklikt")
}

function CheckField() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value.length == "" || password.value.length == "") {
        alert("Please enter your username or password!");
        return false;
    }
}

function ageCheck() {
    age = parseInt(document.getElementById("age").value);
    if(age < 25) {
        alert("je bent jong voor me")
    }
    else{
        alert("beste match in hele tinder")
    }
}