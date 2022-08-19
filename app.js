

let cardNumber = document.querySelector('#card-number');
let OnCard = document.querySelector('h1');

cardNumber.addEventListener('input', function () {
    OnCard.innerText = this.value;
    console.log(OnCard);
});

// change card name dynamically on CARD image

let input_Name = document.querySelector('#name');
let OnCard_name = document.querySelector('td.card-name>p');

input_Name.addEventListener('input', function () {
    OnCard_name.innerText = this.value.toUpperCase();     // add the typed in value to the <p> on the card image
});

//  Exp month 
let get_month_value = document.querySelector('input#expM');
let addMonth = document.querySelector('.exp-m');

get_month_value.addEventListener('input', function () {
    addMonth.innerText = this.value;     // add the typed in value to the <p> on the card image
});

// Exp year 
let get_year_value = document.querySelector('input#expY');
let add_year = document.querySelector('.exp-y');

get_year_value.addEventListener('input', function () {
    add_year.innerText = this.value;     // add the typed in value to the <p> on the card image
});

// CVC code 
let getCVC = document.querySelector('#cvc');
let addCVC = document.querySelector('div.cvc>p');

getCVC.addEventListener('input', function () {
    addCVC.innerText = this.value;     // add the typed in value to the <p> on the card image
});

