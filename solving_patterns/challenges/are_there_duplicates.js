const { log } = console;

/* 
    Implement a function called, areThereDuplicates wich accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using frequency counter patter OR the multiple pointers pattern.

    You solution MUST have the following complexities:

    Time: O(N)
    Space: O(N)

*/

// Sample Input:
log(areThereDuplicates(1, 2 ,3)) // false
log(areThereDuplicates(1, 2, 2)) // true
log(areThereDuplicates('a', 'b', 'c', 'a')) // true


function areThereDuplicates(...args) {
    // Crear objeto para comparar
    let freqCounter = {};
    // Loop a travez de los argumentos
    for ( let arg of args) {
        freqCounter[arg] = freqCounter[arg] + 1 || 1;
        // Si existe mas de un mismo valor dentro del objeto
        if(freqCounter[arg] >=2) {
            return true
        }
    }
    return false;
}