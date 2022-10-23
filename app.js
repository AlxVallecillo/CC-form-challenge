

let cardNumber = document.querySelector('#card-number');
let OnCard = document.querySelector('h1');

cardNumber.addEventListener('input', function () {
    OnCard.innerText = this.value;
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


// Add event listernert to button  when is clicked, to validate and if all data is correct
// hide the current form and display the final status Thank you on screen 

let confirmBTN = document.querySelector('#confirm');
let form = document.querySelector('form').classList;
let final = document.querySelector('.final').classList;

// validate that the input ntype name is not empty.
confirmBTN.addEventListener('click', function () {
    let verifyName = document.querySelector('.nameWarning').classList;
    let veryfyCard = document.querySelector('.numberWarning').classList;
    let veryfyDate = document.querySelector('.dateWarning').classList;
    let veryfyCVC = document.querySelector('.cvcWarning').classList;
    let emptyName = "";

    if (input_Name.value == "") {
        input_Name.value = emptyName;
        checkField(verifyName, input_Name, emptyName);
    }

    if (cardNumber.value == "") {
        checkField(veryfyCard, cardNumber, emptyName);
    }

    if (get_month_value.value == "" || get_year_value.value == "") {
        checkField(veryfyDate, get_month_value, emptyName);
        checkField(veryfyDate, get_year_value, emptyName);
    }

    if (getCVC.value == "") {
        checkField(veryfyCVC, getCVC, emptyName);
    }

    form.add('hide');
    final.remove('hide');
    console.log(final);
});

// animate if the field is  empty. using a switch statement
function checkField(param1, param2, param3) {
    switch (param2.value) {
        case param3:
            param1.replace('hide', 'show');
            break;

        default:
            console.log(param2.value);
            break;
    }
}

