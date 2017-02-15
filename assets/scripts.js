var add = function(number1, number2) {
        return number1 + number2;
      };

      var number1 = parseInt(prompt("Enter a number:"));
      var number2 = parseInt(prompt("Enter another number:"));
      var result = add(number1, number2);
      alert(result);

var height=parseFloat(prompt("Please enter your height"));
var mass=parseInt(prompt("Please enter your mass"));
var sqrd=function(number1){
  return number1 * number1
};

var heightsqrd=sqrd(height);
var BMI= function(number3,number4){
  return number3 / number4;
};
var ans=BMI(mass,heightsqrd);
alert(ans);
var kilos = parseFloat(prompt("Enter your body mass in kilos"));
var lbs = 2.20462
var massConverter = function (number5) {
  return number5*lbs;
};
var pounds = massConverter(kilos);
alert(pounds)
