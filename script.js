const inputNumber = document.getElementById("input-number");
const inputName = document.getElementById("input-name");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const inputCvc = document.getElementById("input-cvc");
const cardNumber = document.getElementById("number");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCvc = document.getElementById("cvc");
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const done = document.querySelector(".thank-you");
const buttonContinue = document.querySelector(".finish-button");

let cardNameSpan =document.querySelector(".error-message-name");
let cardNumberSpan = document.querySelector(".error-message-number");
let cardExp = document.querySelector(".error-message-date");
let cardCvcSpan = document.querySelector(".error-message-cvc");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e) {
    cardName.innerText = format(e.target.value);
}

function setCardMonth(e) {
    cardMonth.innerText = format(e.target.value);
}

function setCardYear(e) {
    cardYear.innerText = format(e.target.value);
}

function setCardCvc(e) {
    cardCvc.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g,"$& ");
}

function handleSubmit(e) {
    e.preventDefault();
    if(!inputName.value) {
        inputName.classList.add("error");
        inputName.parentElement.classList.add("error-message");
        cardNameSpan.classList.remove("hidden");
    } else {
        inputName.classList.remove("error");
        inputName.parentElement.classList.remove("error-message");
        cardNameSpan.classList.add("hidden");
    }

    if(!inputNumber.value) {
        inputNumber.classList.add("error");
        inputNumber.parentElement.classList.add("error-message");
        cardNumberSpan.classList.remove("hidden");
    } else if(inputNumber.value.length < 16) {
        inputNumber.classList.add("error");
        cardNumberSpan.classList.add("numbers-out");
        cardNumberSpan.classList.remove("hidden");
    } else {
        inputNumber.classList.remove("error");
        inputNumber.parentElement.classList.remove("error-message");
        cardNumberSpan.classList.remove("numbers-out");
        cardNumberSpan.classList.add("hidden");
    }

    if(!inputMonth.value) {
        inputMonth.classList.add("error");
        inputMonth.parentElement.classList.add("error-message");
        cardExp.classList.remove("hidden");
    } else {
        inputMonth.classList.remove("error");
        inputMonth.parentElement.classList.remove("error-message");
        cardExp.classList.add("invalid");
        cardExp.classList.remove("hidden");
    }

    if(!inputYear.value) {
        inputYear.classList.add("error");
        inputYear.parentElement.classList.add("error-message");
        cardExp.classList.remove("hidden");
    } else {
        inputYear.classList.remove("error");
        inputYear.parentElement.classList.remove("error-message");
        cardExp.classList.add("invalid");
        cardExp.classList.remove("hidden");
    }

    if(!inputCvc.value) {
        inputCvc.classList.add("error");
        inputCvc.parentElement.classList.add("error-message");
        cardCvcSpan.classList.remove("hidden");
    } else {
        inputCvc.classList.remove("remove");
        inputCvc.parentElement.classList.remove("error-message");
        cardCvcSpan.classList.add("numbers-out");
        cardCvcSpan.classList.remove("hidden");
    }

    if(inputName.value &&
        inputNumber.value &&
        inputMonth.value &&
        inputYear.value &&
        inputCvc.value &&
        inputNumber.value.length == 16) {
            done.classList.remove("hidden");
            form.classList.add("hidden");
        }
}

inputNumber.addEventListener("keyup", setCardNumber);
inputName.addEventListener("keyup", setCardName);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCvc.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);

buttonContinue.addEventListener("click", function (e) {
    e.preventDefault();

    document.location.reload(true);

});