let first = document.getElementById('first');
let last = document.getElementById('last');
let email = document.getElementById('email');
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
let valid = document.getElementsByClassName('.valid')

const regExp = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const em = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const num = /^\+?3?8?(0\d{9})$/
const pas = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

first.addEventListener('input', () => {
    if (!regExp.exec(first.value)) {
        first.style.border = '2px solid red'
        first.style.boxShadow = 'none'
        firstDiv.style.display = 'block'

    } else {
        first.style.border = '2px solid green'
        firstDiv.style.display = 'none'
    }
})

last.addEventListener('input', () => {
    if (!regExp.exec(last.value)) {
        last.style.border = '2px solid red'
        last.style.boxShadow = 'none'
        lastDiv.style.display = 'block'
    } else {
        last.style.border = '2px solid green'
        lastDiv.style.display = 'none'
    }
})

email.addEventListener('input', () => {
    if (!em.exec(email.value)) {
        email.style.border = '2px solid red'
        email.style.boxShadow = 'none'
        emailAdress.style.display = 'block'
    } else {
        email.style.border = '2px solid green'
        emailAdress.style.display = 'none'
    }
})

phone.addEventListener('input', () => {
    if (!num.exec(phone.value)) {
        phone.style.border = '2px solid red'
        phone.style.boxShadow = 'none'
        phone.style.display = 'block'
        phoneValue = +38(0);
    } else {
        phone.style.border = '2px solid green'
        phoneNumber.style.display = 'none'
    }
})

phone.addEventListener('focus', (event) => {
    phone.value = phone.placeholder
})

phone.addEventListener('blur', (event) => {
    phone.placeholder = phone.value
    phone.value = ''
})

pas.addEventListener('input', () => {
    if (!num.exec(pas.value)) {
        pas.style.border = '2px solid red'
        pas.style.boxShadow = 'none'
        pass.style.display = 'block'
        phoneValue = +38(0);
    } else {
        pas.style.border = '2px solid green'
        pass.style.display = 'none'
    }
})