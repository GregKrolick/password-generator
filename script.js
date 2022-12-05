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

var confirmedCharCount = 0;

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
  
  if (passwordLength == null || passwordLength == "" || passwordLength < 8 || passwordLength > 128 || Number.isFinite(passwordLength) === false ) {
    passwordLength = parseInt(passwordLength);
    alert("Length criteria not followed. Please try again");
    return "Error";
  } else {
  alert("You must confirm at least 2 of 4 following prompts")

    if (confirm("Include numbers in password?")) {
    pwNumberChar = true
    createdPassword += numberChars;
    confirmedCharCount ++;
  }

  if (confirm("Include lowercase characters in password?")) {
    pwLowerCaseChar = true
    createdPassword += lowerChars;
    confirmedCharCount ++;
  }

  if (confirm("Include uppercase characters in password?")) {
    pwUpperCaseChar = true
    createdPassword += upperChars;
    confirmedCharCount ++;
  }

  if (confirm("Include special characters in password?")) {
    pwSpecialChar = true
    createdPassword += specialChars;
    confirmedCharCount ++;
  }

  // confirms if at least 2 character options were selected then generates password
  if (confirmedCharCount < 2){
    alert ("Two character options must be selected")
  } else {
    var generatedPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      var randChar = createdPassword.length * Math.random();
      generatedPassword += createdPassword.charAt(randChar)
    }
    return generatedPassword;
  }
}
}
