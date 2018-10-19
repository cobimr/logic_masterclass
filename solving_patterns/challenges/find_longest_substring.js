const {
    log
} = console;

/*
    Write a function called findLongestSubstring, which accepts a string and returns the lenght of the longest substring with all distinct characters.

    Time Complexity: O(n)
      
*/

// Sample Input:
log(findLongestSubstring('')) // 0
log(findLongestSubstring('rithmschool')) // 7
log(findLongestSubstring('thisisawesome')) // 6
log(findLongestSubstring('thecatinthehat')) // 7
log(findLongestSubstring('bbbbbb')) // 1
log(findLongestSubstring('longestsubstring')) // 8
log(findLongestSubstring('thisishowwedoit')) // 6

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}