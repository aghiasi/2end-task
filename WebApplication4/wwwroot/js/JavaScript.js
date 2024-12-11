window.onload = (event) => {
    const data = JSON.parse(localStorage.getItem("account"));
    const error = document.getElementById("error");
    const name = document.getElementById("name");
    const family = document.getElementById("family");
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    if (data === null) {
        error.innerText = "ابتدا وارد حساب کاربری خود شوید";
    } else {
        error.innerText = "";
        name.innerText = data.name;
        family.innerText = data.fName;
        userName.innerText = data.userName;
        email.innerText = data.email;
        phone.innerText = data.phone;
    }
};
const exitHandler = () => {
    localStorage.clear();
    window.location.href = "/";
};
