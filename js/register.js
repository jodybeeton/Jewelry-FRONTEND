// ----------------- REGISTER DATA --------------------//
function createUsers(){
    const form = document.getElementById("reg-form")
    const inputs = form.getElementsByTagName("input");
  
    fetch("https://secret-ridge-68291.herokuapp.com/add-new-user/",{
        method: 'POST',
        body: JSON.stringify({
            name: inputs[0].value,
            surname: inputs[1].value,
            email: inputs[2].value,
            pin: inputs[3].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        alert("User has been created");
        document.getElementById("reg-form").reset();
        window.location.href="index.html";
    });
}