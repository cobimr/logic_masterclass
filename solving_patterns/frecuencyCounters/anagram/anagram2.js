const { log } = console;

// Given 2 strings, write a function to determine if:
// ( the second string is an 'anagram' of the first)

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.


log(validAnagram("", "")); // true
log(validAnagram("aaz", "zza")); //false
log(validAnagram("anagram", "nagaram")); //true
log(validAnagram("rat", "car")); //false
log(validAnagram("awesome", "awesom")); //false
log(validAnagram("qwerty", "qeywrt")); //true
log(validAnagram("texttwisttime", "timetwisttext")); //true
log(validAnagram("ArEr", "RwasD")); //false

// O(n) Version

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // Object to compare
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exist, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
