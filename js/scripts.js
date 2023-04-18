const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const interestSelect = document.querySelector("#interest");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Preencha o seu nome, por favor");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Preencha o seu e-mail, por favor");
        return;
    }

    if(phoneInput.value === "" || !isPhoneValid(phoneInput.value)){
        alert("Preencha o seu whatsapp, por favor");
        return;
    }

    if(interestSelect.value === ""){
        alert("Selecione o seu interesse, por favor");
        return;
    }

    form.submit();

});

function isEmailValid (email){

    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
}

function isPhoneValid (phone){

    const phoneRegex = new RegExp (
        /\(?([0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{6})/
    );

    if(phoneRegex.test(phone)) {
        return true;
    }
}