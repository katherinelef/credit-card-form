
```
$(document).ready(function() {

  console.log('Probar con el numero valido 4544164785372342');
```

* VARIABLES GLOBALES

```
  var $inputCard = $('#card-number');
  var $inputMonth = $('.input-month');
  var $inputYear = $('.input-year');
  var $buttonNext = $('#next');
  var regexOnlyNumbers = /^[0-9]+$/;
  var labelErrorOrSuccessMessages = $('label[for="card-number"]');

```

* FUNCION DE CALLBACK
```
  $inputCard.on('input', function() {
```
* STATEMENT
  ```
    isValidCreditCard($(this).val().trim());
  });
  ```

* FUNCION GLOBAL
```
  function activeButton() {
```
    * CLOUSURE
  ```
    $buttonNext.attr('disabled', false);
  }
  ```

* FUNCION GLOBAL
```
  function desactiveButton() {
```

    * CLOUSURE
```
    $buttonNext.attr('disabled', true);
  }
```

* FUNCION GLOBAL
```
  function longitud(input) {
    if (input.trim().length === 16) {
      return input;
    }
  }
```

* FUNCION GLOBAL
```
  function soloNumeros(input) {

    * VARIABLE LOCAL
    var regex = /^[0-9]+$/;
    if (regex.test(input)) {
      return input;
    }
  }
```

* FUNCION GLOBAL
```
  function isValidCreditCard(numberCard) {
```

    * VARIABLE LOCAL
```
    var creditCardNumber = soloNumeros(longitud(numberCard));
    if (creditCardNumber !== undefined) {
```

    * VARIABLE LOCAL
```
    var arr = [];
```

    * VARIABLE LOCAL
```
    var sumaTotal = 0;
```

      ```
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
      ```

        * FUNCION LOCAL
        * STATEMENT

        ```
        activeButton();
      } else {
        console.log('No es un numero valido');
        ```

        * FUNCION LOCAL
        * STATEMENT

        ```
        desactiveButton();
      }
    } else {
      console.log('Verifique el numero de su tarjeta');
      ```

        * FUNCION LOCAL
        * STATEMENT

  ```
      desactiveButton();
    }
  }
});
```
