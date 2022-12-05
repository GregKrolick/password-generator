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

  var passwordLength = prompt("Enter Password Length. Must be greater than 7 and less than 129");
  
  if (passwordLength == null || passwordLength == "" || passwordLength < 8 || passwordLength > 128 ) {
    passwordLength = parseInt(passwordLength);
    alert("Length Criteria not followed. Please try again");
  }


}
