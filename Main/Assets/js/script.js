//##### Variables #####
var generateBtn = document.querySelector("#generate"); //To give functionality to the generate button
var passwordText = document.querySelector("#password"); //To print the finished password onto the page

//Strings for each character type the user can select from
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()";

//So that the password doesn't show up as "Undefined" at the beginning of the string
var currentPassword = "";

//To make sure that when the while loop is going, that there is no pattern between connecting character types
var charSelectBase = "abcd";

//##### Function to write the password #####
function writePassword() {
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters."); //User inputs desired length
  passwordLength = parseInt(passwordLength); //Makes sure that the passwordLength data type is integer, without this, Number.isInteger will always return false

  //Checks to see if the user has entered a length between 8 and 128, if not, then the function will terminate
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please choose a password between 8 and 128 characters.");
    return;
  }

  //Does an additional check to see if the value entered is an integer, if not, the function will terminate and they will get a different error message
  if (Number.isInteger(passwordLength) === false) {
    alert("Invalid character. Please enter a number.");
    return; 
  }

  //Checks to see which character types the user wants in the password, it is a boolean choice and will set to true or false
  var lowerConfirm = confirm("Include lowercase characters? (Ok for yes, cancel for no)");
  var upperConfirm = confirm("Include uppercase characters? (Ok for yes, cancel for no)");
  var numberConfirm = confirm("Include numbers? (Ok for yes, cancel for no)");
  var specialConfirm = confirm("Include special characters? (Ok for yes, cancel for no)");

  //Checks to see whether the user has put in at least one character type, if not, then the function will terminate
  if ((lowerConfirm === false) && (upperConfirm === false) && (numberConfirm === false) && (specialConfirm === false)) {
    alert("Invalid character selection. You must select at least one valid character group.");
    return;
  }

  //Loop to add desired characters onto the currentPassword string, the loop will keep going until the string length is the same as the user input
  while (currentPassword.length < passwordLength){
    var charSelect = charSelectBase.charAt(Math.random() * (charSelectBase.length - 0) + 0); //Will randomly select a, b, c or d from charSelectBase, this stops patterns from being in the password (EG: stops it from always being in the pattern: lower, upper, number, special, lower, upper, number, special etc.)

    //Will check both character choice, and charSelect, and will add a random character from each string into currentPassword
    if ((lowerConfirm === true) && (charSelect === "a")) {
      currentPassword = currentPassword + lowerCase.charAt(Math.random() * (lowerCase.length - 0) + 0);
    }
    else if ((upperConfirm === true) && (charSelect === "b")) {
      currentPassword = currentPassword + upperCase.charAt(Math.random() * (upperCase.length - 0) + 0);
    }
    else if ((numberConfirm === true) && (charSelect === "c")) {
      currentPassword = currentPassword + numbers.charAt(Math.random() * (numbers.length - 0) + 0);
    }
    else if ((specialConfirm === true) && (charSelect === "d")) {
      currentPassword = currentPassword + special.charAt(Math.random() * (special.length - 0) + 0);
    }
  } 

  //Inputs the currentPassword onto the page
  passwordText.textContent = currentPassword;

  //resets the variable so that there will be no repeats
  currentPassword = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);