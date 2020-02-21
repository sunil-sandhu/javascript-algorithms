function isPalindrome(string) {

    string = string.toLowerCase();
    let charactersArray = string.split("");
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(""); // the characters we want to use
    let lettersArray = []; // the characters from our characters array will go here
    let isPalindrome = false;
    charactersArray.forEach(character => {
        // indexOf is an array method that returns index of character passed in. However, it returns -1 if it doesn't exist
        // doing this strips our string of anything that isn't a character from the alphabet (validCharacters)
        if(validCharacters.indexOf(character) > -1)  {
            lettersArray.push(character);
        }
    })

    if(lettersArray.join("") === lettersArray.reverse().join("")) {
        isPalindrome = true;
    } 

    return console.log(isPalindrome)
}


isPalindrome("racecar");
