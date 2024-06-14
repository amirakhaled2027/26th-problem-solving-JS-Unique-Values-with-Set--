//unique values using Set() data structure 
//set () data structure only accepts unique values: meaning if you try to pass sth that's already in there, it's not gonna accept it
//we're gonna use the for loop: it the value is already in the set? if it's then i'm gonna return false, otherwise it's true


function unique(str) {
    // return new Set(str).size === str.length;
    let value = new Set();
    
    for (let letter of str) {
        if (value.has(letter)) {
            return false;
        } 
        value.add(letter)
        // If the letter is not found in the Set (meaning it's unique), 
        // the value.add(letter) method adds the letter to the Set. 
        // This ensures that only unique characters are stored in the Set.

    }


    return true;
}

console.log(unique("abcd"));
//return true

console.log(unique("abcdade"));
//return false  ad = duplicate

