// Assigning each button a const variable for easy selection for use to increase or decrease product count
const addBtn1 = document.querySelector('#add1')
const subtrBtn1 = document.querySelector('#subtract1')

const addBtn2 = document.querySelector('#add2')
const subtrBtn2 = document.querySelector('#subtract2')

// Creating eventlisteners to listen for clicks when the add or subtract buttons are clicked
addBtn1.addEventListener('click', addOneToProductOne);
addBtn2.addEventListener('click', addOneToProductTwo);

subtrBtn1.addEventListener('click', subOneFromProductOne);
subtrBtn2.addEventListener('click', subOneFromProductTwo);

// Declaring the default price values
let productCount1 = 0;
let productCount2 = 0;

const productPrice1 = 54.99;
const  productPrice2 = 74.99;
const shippingCosts = 19;

let totalPrice = 0;
let grandTotal;

let arrFinalTotal = [0,0]

// Setting up the click event functions
function addOneToProductOne() {
    productCount1 += 1;
    document.querySelector('.count1').textContent = productCount1;

    totalPrice = (productPrice1 * productCount1);
    arrFinalTotal[0] = totalPrice;

    grandTotal = arrFinalTotal[0] + arrFinalTotal[1] + shippingCosts
    document.querySelector('.total-cost>span').textContent = grandTotal.toFixed(2);
}

function subOneFromProductOne() {
    if(productCount1 !== 0) {
        productCount1 -= 1;
    }else{
        return
    }

    document.querySelector('.count1').textContent = productCount1;

    totalPrice = (productPrice1 * productCount1);
    arrFinalTotal[0] = totalPrice;

    grandTotal = arrFinalTotal[0] + arrFinalTotal[1] + shippingCosts
    document.querySelector('.total-cost>span').textContent = grandTotal.toFixed(2);    
}

function addOneToProductTwo() {
    productCount2 += 1;
    document.querySelector('.count2').textContent = productCount2;

    totalPrice = (productPrice2 * productCount2);
    arrFinalTotal[1] = totalPrice;

    grandTotal = arrFinalTotal[0] + arrFinalTotal[1] + shippingCosts
    document.querySelector('.total-cost>span').textContent = grandTotal.toFixed(2);
}

function subOneFromProductTwo() {
    if(productCount2 !== 0) {
        productCount2 -= 1;
    }else{
        return
    }

    document.querySelector('.count2').textContent = productCount2;

    totalPrice = (productPrice2 * productCount2);
    arrFinalTotal[1] = totalPrice;

    grandTotal = arrFinalTotal[0] + arrFinalTotal[1] + shippingCosts
    document.querySelector('.total-cost>span').textContent = grandTotal.toFixed(2);
}

// To add an event listener that checks if any field is left blank and delivers a message
const submitBtn = document.querySelector('.btn');
let inputValue = document.querySelector('input').textContent;
let selectValue = document.querySelector('select>option').textContent; 

submitBtn.addEventListener('click', checkForBlanksAndReturnMessage);

function checkForBlanksAndReturnMessage() {
    if (inputValue === '' && selectValue === 'Your Country...'){
        document.querySelector('.error-declaration').classList.remove('success-declaration');
        document.querySelector('.error-declaration').textContent = 'Please provide all required information!'
    }else {
        document.querySelector('.success-declaration').classList.remove('error-declaration');
        alert('Submitted Successfully');
    }
}