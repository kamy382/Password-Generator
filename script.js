// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "qwertyuiopasdfghjklzxcvbnm"
var lowercaseChars = characters.split("")
var uppercaseChars = characters.toUpperCase().split("")

// console.log(lowercaseChars)
// console.log(uppercaseChars)

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters long do you want your password to be? (8-128)")
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password needs to be between 8-128 characters long")
    return
  }

  var characterBank = []

  var lowerCheck = confirm("Do you want to include lower case characters?");
  var upperCheck = confirm("Do you want to include upper case characters?");
  var numericCheck = confirm("Do you want to include numeric characters?");
  var specialCheck = confirm("Do you want to include special characters?");

  if(lowerCheck == true){
    characterBank = characterBank.concat(lowercaseChars)
  }
  if(upperCheck == true){
    characterBank = characterBank.concat(uppercaseChars)
  }
  console.log(characterBank)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
