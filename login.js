let Form = document.querySelector(".Form");
let submit = document.querySelector(".submit");
let Email = document.querySelector(".E-mail");
let Password = document.querySelector(".Password");
let passIn = document.querySelector(".passIn");


let emailRegx = /^[a-zA-Z0-9%]+@gmail.com{0,20}$/;
let passwordRegx = /^\w{8,}$/;

Password.addEventListener("input", function () {
    if (!passwordRegx.test(Password.value)) {
        passIn.innerHTML = `
            <li class="invalid-text">Password must contain at least 8 characters.</li>
        `;
    } else {
        passIn.innerHTML = "";
    }
});



Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let outpute ;
    if(Email.value==localStorage.getItem("email")){
        outpute=true;
    }
    let outputp;
    if(Password.value==localStorage.getItem("password")){
        outputp=true;
    }
    if (!outpute) {
        alert("E-mail is wrong");
    } else if (!outputp) {
        alert("Password is wrong");
    } else {
        window.location.replace("./index.html");
    }
});
