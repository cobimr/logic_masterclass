const {
    log
} = console;

/*
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

// Sample Input:
log(isSubsequence('abc', 'abracadabra')) // true
log(isSubsequence('sing', 'sting')) // true
log(isSubsequence('abc', 'bca')) // false
log(isSubsequence('hello', 'hello world')) // true



function isSubsequence(str1, str2) {

    let i = 0    // Index of str1 
    let j = 0    // Index of str2 
      
    while (i < str1.length && j < str2.length ) {
        if ( str1[i] === str2[j] ) i++;

        if (i === str1.length) return true;

        j++;
    }
    return false;
}