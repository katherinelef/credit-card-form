



$(document).ready(function() {

  console.log('Probar con el numero valido 4544164785372342');

  var $inputCard = $('#card-number');
  var $inputMonth = $('.input-month');
  var $inputYear = $('.input-year');
  var $buttonNext = $('#next');
  var regexOnlyNumbers = /^[0-9]+$/;
  var labelErrorOrSuccessMessages = $('label[for="card-number"]');


  $inputCard.on('input', function() {

    isValidCreditCard($(this).val().trim());
  });


  function activeButton() {

    $buttonNext.attr('disabled', false);
  }


  function desactiveButton() {

    $buttonNext.attr('disabled', true);
  }


  function longitud(input) {
    if (input.trim().length === 16) {
      return input;
    }
  }


  function soloNumeros(input) {


    var regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  }


  function isValidCreditCard(numberCard) {


    var creditCardNumber = soloNumeros(longitud(numberCard));
    if (creditCardNumber !== undefined) {

      var arr = [];

      var sumaTotal = 0;
      for (var index = creditCardNumber.length - 1; index >= 0; index--) {
        arr.push(creditCardNumber[index]);
      }
      for (var index = 1; index < arr.length; index = index + 2) {
        arr[index] = arr[index] * 2;
        if (arr[index] >= 10) {
          arr[index] = arr[index] - 9;
        }
      }

      for (var index = 0; index < arr.length; index++) {
        sumaTotal = sumaTotal + parseInt(arr[index]);
      }

      if (sumaTotal % 10 === 0) {
        console.log('Es una tarjeta valida');

        activeButton();
      } else {
        console.log('No es un numero valido');

        desactiveButton();
      }
    } else {
      console.log('Verifique el numero de su tarjeta');
  
      desactiveButton();
    }
  }
});
