var add = function(number1, number2) {
        return number1 + number2;
      };
var subtract = function (number1, number2) {
        return number1 - number2;
};
var multiply = function (number1, number2) {
        return number1 * number2;
};
var divide = function (number1,number2){
        return number1 / number2;
};
$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
  var number1 = parseFloat($("#add1").val());
  var number2 = parseFloat($("#add2").val());
  var result = add(number1, number2);
  $("#outputAdd").text(result);
  });
  $("form#subtract").submit(function (event) {
    event.preventDefault();
    var number1 = parseFloat($("#minus1").val());
    var number2 = parseFloat($("#minus2").val());
    var result = subtract(number1,number2);
    $("#outputSubtract").text(result);
  });
  $("form#multiply").submit( function (event) {
    event.preventDefault();
    var number1 = parseFloat($("#multiply1").val());
    var number2 = parseFloat($("#multiply2").val());
    var result = multiply (number1,number2);
    $("#outputMultiply").text(result);
  });
  $("form#division").submit( function (event) {
    event.preventDefault();
    var number1 = parseFloat($("#divide1").val());
    var number2 = parseFloat($("#divide2").val());
    var result = divide (number1,number2);
    $("#outputDivide").text(result);
  })
});
//
// var height=parseFloat(prompt("Please enter your height"));
// var mass=parseFloat(prompt("Please enter your mass"));
// var sqrd=function(number1){
//   return number1 * number1
// };
//
// var heightsqrd=sqrd(height);
// var BMI= function(number3,number4){
//   return number3 / number4;
// };
// var ans=BMI(mass,heightsqrd);
// alert(ans);
// var kilos = parseFloat(prompt("Enter your body mass in kilos"));
// var lbs = 2.20462
// var massConverter = function (number5) {
//   return number5*lbs;
// };
// var pounds = massConverter(kilos);
// alert(pounds)
