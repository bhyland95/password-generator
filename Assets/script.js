// Assignment code here

var charCodeArray = [];
var myArray = [];
var myPassword = ""

//FUNCTION that Adds Appropriate Character Codes to charCodeArray
function arrayFromLowtoHigh(low, high) {
  for (var i = low; i <= high; i++) {
    charCodeArray.push(i)
  }
};

//FUNCTION to generate random number in charCodeArray
function randomNumer(lengthOfArray) {
  var result = Math.floor(Math.random() * lengthOfArray)
  return result
}

//FUNCTION that resets charcodeArray and textbox area containing password
function reset() {
  charCodeArray = [];
  myArray = [];
  myPassword = "";
  document.querySelector("#password").value = "";
}

//FUNCTION to generate password
function generatePassword() {
  //Resets all variables back to blanks
  reset();
  //CRITERIA for password
  //Length
  var passLength = parseInt(prompt("How many characters should your password be? Please choose between 8 and 128."))
  if (passLength >= 8 && passLength <= 128){
    //UpperCase
    var upperCase = confirm("Would you like to include UPPERCASE characters in your password?")
    //Adds uppercase charnumbers to charCodeArray
    if (upperCase) {
      arrayFromLowtoHigh(65, 90)
    }
    //Number
    var numbers = confirm("Would you like to include NUMBERS in your password?")
    console.log(numbers)
    //adds number charnumbers to charCodeArray
    if (numbers) {
      arrayFromLowtoHigh(48, 57)
    }
    //Special
    var special = confirm("Would you like to include SPECIAL characters in your password?")
    //adds special charnumbers to charCodeArray
    if (special) {
      arrayFromLowtoHigh(32, 47)
    }
    if (special) {
      arrayFromLowtoHigh(58, 64)
    }
    if (special) {
      arrayFromLowtoHigh(91, 96)
    }
    if (special) {
      arrayFromLowtoHigh(123, 126)
    }
    //Adds lowercase charnumbers to charCodeArray
    arrayFromLowtoHigh(97, 122);
    //IF NOT BETWEEN 8 - 128
  } 
  else {
    alert("Length must be a number between 8 and 128. Please try again.")
    generatePassword()
  }

  //Loops based on how long you want your password and adds char to array.
  for (var i = 0; i < passLength; i++) {
    myArray.push(String.fromCharCode(charCodeArray[randomNumer(charCodeArray.length)]));
  }

  //Concats Array into one string. 
  for (i = 0; i < myArray.length; i++) {
    myPassword += myArray[i]
  }
  console.log(charCodeArray)
  return myPassword

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
