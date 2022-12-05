// possible password characters 
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "~!@#$&*?";
// creates and sets criteria variables to false
var pwNumberChar = false;
var pwSpecialChar = false;
var pwUpperCaseChar = false;
var pwLowerCaseChar = false;

var createdPassword = ""


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //prompts for password length
  var passwordLength = prompt("Enter Password Length. Must be greater than 7 and less than 129");
  
  if (passwordLength == null || passwordLength == "" || passwordLength < 8 || passwordLength > 128 ) {
    passwordLength = parseInt(passwordLength);
    alert("Length criteria not followed. Please try again");
  }

  alert("You must confirm at least 2 of 4 following prompts")

  if (confirm("Include numbers in password?")) {
    pwNumberChar = true
    createdPassword += pwNumberChar;
  }

  if (confirm("Include lowercase characters in password?")) {
    pwLowerCaseChar = true
    createdPassword += pwLowerCaseChar;
  }

  if (confirm("Include uppercase characters in password?")) {
    pwUpperCaseChar = true
    createdPassword += pwUpperCaseChar;
  }

  if (confirm("Include special characters in password?")) {
    pwSpecialChar = true
    createdPassword += pwSpecialChar;
  }
}
