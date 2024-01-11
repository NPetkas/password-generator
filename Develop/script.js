// Assignment Code
var generateBtn = document.querySelector("#generate");

// global string variables
var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var numberValue = "0123456789";
var specialSymb = "!@#$%^&*()?.<\>|=+:;,[-_]";

// generate password function declaration with user number value input prompt
function generatePassword() {
userPass = prompt("How many characters would you like your password to be?");
userPass = parseInt(userPass);

// password length criteria and issue message 
if (userPass < 8 || userPass > 128) {
  alert("Please choose a number between 8 and 128");
  return 'Please Try Again';
}


// local variable criteria and prompt
 var lowercase = confirm("Use lowercase letters?");
 var uppercase = confirm("Use uppercase letters?");
 var numbers = confirm("Use numbers letters?");
 var special = confirm("Use special characters letters?");

 // 'if false' condition to validate the use of either a numeric or special character value 
 if (numbers === false && special === false) {
  alert("Your passwords does not meet the criteria. Must have a numerical or special character value");
  return 'Please Try Again';
} 

// empty string variable to store concatenated global values
 var possibleValues = "";

 // 'if true' condition that combines global string variables using assignment operators
 if (lowercase) {
  possibleValues += lowercaseAlpha;
 }
 if (uppercase) {
  possibleValues += uppercaseAlpha;
 }
 if (numbers) {
  possibleValues += numberValue;
 }
 if (special) {
  possibleValues += specialSymb;
 }

 // 'if false' condition that omits a global string variable using assignment operators
 if (lowercase = false) {
  possibleValues -= lowercaseAlpha;
}
 if (uppercase = false) {
  possibleValues -= uppercaseAlpha;
 }
 if (numbers = false) {
  possibleValues -= numberValue;
 }
 if (special = false) {
  possibleValues -= specialSymb;
 }


 // 'for' loop which iterates through new variable string with respect to userPass selection
 var password = "";
 for (var i = 0; i < userPass; i++) {
  var generate = [Math.floor(Math.random() * possibleValues.length)];
  password += possibleValues[generate];
 }

// randomly generated password output
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
