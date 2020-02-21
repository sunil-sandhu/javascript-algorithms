// This algorithm has been completed with a time complexity of O(n + m) which can also just be referred to as O(n). The reason for the n + m is because there are two params being passed in.

function harmlessRansomNote(noteText, magazineText) {
    // assumption in this set up is that both params do not contain any punctuation
    let noteArray = noteText.split(" ");
    let magazineArray = magazineText.split(" ");
    let magazineObject = {}; // This will act like a hash table to keep track of the number of instances of each word used in magazineText

    let noteIsPossible = true;

    magazineArray.forEach(word => {
        if(!magazineObject[word]) magazineObject[word] = 0; // if word doesn't exist, add it to the object with a value of 0;
        magazineObject[word]++ // if word does exist, increase the value by 1
    })

    noteArray.forEach(word => {
        if(magazineObject[word]) {
            magazineObject[word]--
            if(magazineObject[word] < 0) noteIsPossible = false;
        } else {
            noteIsPossible = false
        }
    })

    return console.log(noteIsPossible);
}



harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');