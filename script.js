var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Declaring Variable
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Creating a function to generate the prompts and ask the visitors different options
function getPasswordOptions() {
  //use a while loop
  var confirmLength = prompt("How many characters would you like your password to contain?");

 if(confirmLength <= 9 || confirmLength !== 'number' || confirmLength === specialCharacters>=65) {
  alert("Password length must be a number between 10-64 characters. Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      console.log(typeof confirmLength);
      
 }

 // Determine parameters of password 
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include SPECIAL characters");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include NUMERIC characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include LOWERCASE characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include UPPERCASE characters");
  // Loop if answer is outside the parameters 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 

// Declaring an array to store the password characters from user
var passwordCharacters = [];
// Creating an if statement  
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialCharacters)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(numericCharacters)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
}

  console.log(passwordCharacters);

  var randomPassword = "";
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;



}


// getPasswordOptions.addEventListener();

function writePassword() {

}

generateBtn.addEventListener("click", writePassword);


