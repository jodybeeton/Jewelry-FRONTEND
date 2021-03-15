let users = [];


fetch("https://secret-ridge-68291.herokuapp.com/list-users/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    users = data;
});

function login(){
    let form = document.getElementById("login-form")
    let inputs = form.getElementsByTagName("input");
    
    let mail = inputs[0].value;
    let password = inputs[1].value;

    let log = users.filter(user => {
        return user.email == mail && user.pin == password;
    })

    console.log(log);
    localStorage.setItem("user",JSON.stringify(log[0]))
    if (log.length > 0) {
        alert("You have successfully logged in");
        window.location.href = "index.html";
    }else{
        alert("Please enter a valid username and password");
    }
}