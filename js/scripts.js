// Create Variables
var shopBuzz = [];
var shopFizz = [];
var shopFizzBuzz = [];
var shopAll = [];

// Find and create var from HTML elements
var elItemForm = document.querySelector('.item__form');
var elItemInput = elItemForm.querySelector('.item__input');
var dividedBy3 = document.querySelector('.divided__3');
var dividedBy5 = document.querySelector('.divided__5');
var dividedBy15 = document.querySelector('.divided__15');

// Create function
elItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  // Trim input value
  var inputResult = elItemInput.value.trim();
  
  // Refresh arrays
  shopBuzz = [];
  shopFizz = [];
  shopFizzBuzz = [];
  shopAll = [];
  
  // Check for text and positive number input
  if (inputResult <= 1) {
    elItemInput.value = '';
    elItemInput.placeholder = 'Please positive numbers';
    elItemInput.classList.add('is-invalid');
    return;
  }
  
  if (isNaN(inputResult)) {
    elItemInput.value = '';
    elItemInput.placeholder = 'Please input numbers';
    elItemInput.classList.add('is-invalid');
    return;
  }

  // Remove invalid class
  elItemInput.classList.remove('is-invalid');
  
  // Loop for finding FizzBuzzes
  for (var i = 1; i <= inputResult; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      shopFizzBuzz.push(i);
    } else if (i % 3 === 0) {
      shopFizz.push(i);
    } else if (i % 5 === 0){
      shopBuzz.push(i);
    }
  }
  
  // Display output result 
  dividedBy3.textContent = shopFizz.length + ' ta---  ' + shopFizz.join(', ');
  dividedBy5.textContent = shopBuzz.length + ' ta---  ' + shopBuzz.join(', ');
  dividedBy15.textContent = shopFizzBuzz.length + ' ta---  ' + shopFizzBuzz.join(', ');
  
  // Refresh input 
  elItemInput.value = '';
});









