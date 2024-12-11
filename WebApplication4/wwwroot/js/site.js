// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.getElementById('submit').addEventListener('submit', (e) => {
    e.preventDefault();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const userreg = /[!-\/:-@[-`{-~]/
    const error = document.getElementById('error');
    const name = e.target.name.value;
    const fName = e.target.family.value;
    const userName = e.target.userName.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    if (!name || !fName || !userName || !password || !email || !phone) {
        !name ? document.getElementById('name').classList.add('input-error') : document.getElementById('name').classList.remove('input-error');
        !fName ? document.getElementById('family').classList.add('input-error') : document.getElementById('family').classList.remove('input-error');
        !userName ? document.getElementById('userName').classList.add('input-error') : document.getElementById('userName').classList.remove('input-error');
        !password ? document.getElementById('password').classList.add('input-error') : document.getElementById('password').classList.remove('input-error');
        !email ? document.getElementById('email').classList.add('input-error') : document.getElementById('email').classList.remove('input-error');
        !phone ? document.getElementById('phone').classList.add('input-error') : document.getElementById('phone').classList.remove('input-error');
        error.innerText = 'فیلد های مورد نظر را به درستی تکمیل فرمایید'
    }
    else if (!regex.test(password)) {
        error.innerText = 'کلمه عبور باید شامل حروف بزرگ کوچک و عدد باشد'
    } else if (userreg.test(userName)) {
        error.innerText = 'نام کاربری نمی تواند شامل کاراکتر باشد '
    } else if (userreg.test(name)) {
        error.innerText = 'نام خانوادگی به درستی وارد نشده است'
    }
    else {

        error.innerText = ''
        localStorage.clear();
        localStorage.setItem('account', JSON.stringify({ name, fName, userName, password, email, phone }))
        console.log(localStorage.getItem('account'))
        window.location.href = '/account'
    }
})
