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


function validAnagram(str1 = "", str2 = "") {
  // Convertir strings en arreglos
  const str1Split = str1.toLowerCase().split("");
  const str2Split = str2.toLowerCase().split("");

  // Validar que tengan el mismo length
  if (str1.length !== str2.length) {
    return false;
  }

  // Create and Object for each array
  let strObj1 = {};
  let strObj2 = {};

  // Loop for each string and add the values to the object
  for (let letter of str1Split) {
    strObj1[letter] = (strObj1[letter] || 0) + 1;
  }
  for (let letter of str2Split) {
    strObj2[letter] = (strObj2[letter] || 0) + 1;
  }

  // Loop entre cada Key del primer objeto de string
  for (let key in strObj1) {
    // Si el valor del key no es igual entre ambas, esto determina que la cantidad que se repita una letra tiene que ser la misma
    if (strObj2[key] !== strObj1[key]) {
      return false;
    }
  }
  return true;
}
