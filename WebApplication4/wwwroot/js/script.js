document.getElementById("submit").addEventListener("submit", async (e) => {
    e.preventDefault();
    const usernameError = document.getElementById("error-username");
    const passwordError = document.getElementById("error-password");
    if (!e.target.name.value || !e.target.password.value) {
        !e.target.name.value
            ? (usernameError.innerText = "نام کاربری را وارد فرمایید")
            : (usernameError.innerText = "");
        !e.target.password.value
            ? (passwordError.innerText = "کلمه عبور را وارد فرمایید ")
            : (passwordError.innerText = "");
    } else {
        if (localStorage.getItem("account")) {
            const data = await JSON.parse(localStorage.getItem("account"));
            const username = e.target.name.value;
            const password = e.target.password.value;
            if (username === data.userName && password === data.password) {
                window.location.href = "/account.html";
            } else {
                usernameError.innerText = "نام کاربری یا کلمه عبور به درستی وارد نشده ";
            }
        } else {
            usernameError.innerText = "این کاربر در سیستم موجود نمیباشد";
        }
    }
});
