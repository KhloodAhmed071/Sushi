let Form = document.querySelector(".Form")
let submit = document.querySelector(".submit")
let lastName = document.querySelector(".lastName")
let FirstName = document.querySelector(".FirstName")
let Email = document.querySelector(".E-mail")
let Password = document.querySelector(".Password");
let FirstNameIn = document.querySelector(".FirstNameIn")
let passIn = document.querySelector(".passIn");
let confirmPassword = document.querySelector(".confirmpassword");
let confirmPassIn = document.querySelector(".confirmPassIn");



let FnameRegx = /^[A-Za-z]{2,}$/
let LnameRegx = /^[A-Za-z]{2,}$/
let emailRegx = /^[a-zA-Z0-9%]+@gmail.com{0,20}$/
let passwordRegx = /^\w{8,}$/

FirstName.addEventListener("input",function(){
    FirstNameIn.innerHTML =`
        <li class="invalid-text">Name must start with capital letter</li>
            <li class="invalid-text">Name must contain only letters</li>
            `
})

Password.addEventListener("input",function(){
    passIn.innerHTML =`
            <li class="invalid-text">password must contain at least 8 characters.</li>
            `
})
confirmPassword.addEventListener("input", function () {
    if (confirmPassword.value !== Password.value) {
        confirmPassIn.innerHTML = `<li class="invalid-text">Passwords do not match.</li>`;
    } else {
        confirmPassIn.innerHTML = "";
    }
});
Form.addEventListener("submit", (e) => {
    e.preventDefault();
let outputN = FnameRegx.test(FirstName.value);
let outputL = LnameRegx.test(lastName.value);
let outpute = emailRegx.test(Email.value);
let outputp = passwordRegx.test(Password.value);
    if (!outputN) {
        alert("First Name is wrong")
    }
    else if (!outputL) {
        alert("Last Name is wrong")

    }
    else if (!outpute) {
        alert("E-mail is wrong")

    }
    else if (!outputp) {
        alert("Password is wrong")

    }
    else if (confirmPassword.value !== Password.value) {
        alert("Passwords do not match");
    }
    else {
        localStorage.setItem("email",Email.value)

        localStorage.setItem("password",Password.value)
        window.location.replace("./login.html");

        }
    }
);


