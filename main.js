// Your task is to write a series of functions that execute the following tasks:

// * `xify` - returns the same string, but with every character replaced by an 'x'
//   * Examples:
//     * xify('hello') -> 'xxxxx'
//     * xify('hi there') -> 'xxxxxxxx'
    // console.log(xify("hello"));

            // function xify(str){
            //     let strX = "";
            //     for (let count = 0; count < str.length; count ++){
            //     strX += 'x'
            //     }


            //     return strX;

            // }
// * `yellingChars` - returns the given string with an exclamation point after each character
//   * Examples:
//     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
//     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
//   * Hints:
//     * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
            // function yells(str){
            //     let strX = ""
            //     for (let i of str){
            //         strX += i
            //         strX += '!'
            //     }
            //     console.log(strX);
            // }

            // let str1 = 'goodness';
            // yells(str1);
            // let str2 = 'oh hello';
            // yells(str2);


// * `indexedChars` - adds the index of each character before that character in the given string
//   * Examples:
//     * indexedChars('hello') -> '0h1e2l3l4o'
//     * indexedChars('bye') -> '0b1y2e'
//   * Hints: 
//     * We can add something BEFORE the current character as well!
  
            // function stringy (str) {
            //       let strX = ""
                
            //         for (let i = 0; i < str.length; i++){
            //             strX += i + str[i]
                    
            //         }
            //         console.log(strX)
            //   }
            // let phrase1 = 'hello';
            // stringy (phrase1);
    


// * `numberedChars` - adds the number of each character before that character in the given string
//   * Examples:
//     * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
//     * numberedChars('bye') -> '(1)b(2)y(3)e'
//   * Hints: 
//     * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!
            // function numberedChars (str) {
            //     let strX = ""
            //     let number = 1
            //     for (let i=0; i < str.length; i++){
            //         strX = strX + "(" + number++ + ")" + str[i] 

            //     }
            //     console.log(strX)
            // }
            // let phrase1 = 'strings';
            // numberedChars (phrase1);


// * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
//   * Examples:
//     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//     * exclaim('This is fine.') -> 'This is fine!'
            // function exclaim (string){
            //     let strX = "";
            //     let a = "!";
            //     let b = "?";
            //         for (let i = 0; i < string.length; i++){
            //             if (string[i] === "?" || string[i] === ".") {
            //                 strX = strX + "!"

            //             } else {
            //                 strX = strX + string[i]
            //             }
            //         }return console.log(strX);
            // }console.log(exclaim("Hello. Hello?"));


// * `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
//   * Examples:
//     * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
//     * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'
     
            //    function repeatIt (str, num){
            //        let stringX ="" //input string to be repeated
                
                
            //         for (let i = 0; i <  num ; i ++){
            //             stringX =  stringX + str
            //         }
            //         return console.log(stringX)  
            //    }
            //    repeatIt('oh hi!', 8);


// * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
//   * Examples:
//     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//     * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
            // function shorten(str){
            //     let strX = ""
            //     for (let i = 0; i < 15 ; i++){
            //             strX = strX + str[i] 
                
                                
            //     }
            //     return console.log(strX + "..." );
            // }
            // shorten("The fault, dear Brutus, is not in our stars, but in ourselves.");

// * `ciEmailify` - creates an email from a two-part name
//   * Examples:
//     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
//     function emailify(str){
                    //can't figure out how to remove the "space" completely and replace with "."
            //         let nameify = ""
            //         for (let i = 0; i < str.length; i++){
            //             nameify = nameify + str[i] 
            //             if (str[i] === " ") {
            //                 nameify = nameify + "."
                            
                            
            //     }
            // }
            //     return console.log( nameify + "@codeimmersives.com");
            // }
            // emailify("Jesse Alvarez");
// * `reverse` - reverses the given string
//   * Examples:
//     * reverse('colin') -> 'niloc'
//     * reverse('mesuara') -> 'arausem'
            //     function reverser (str){
            //         let backwards = "";
            //         for (let i = str.length-1 ; i >=0 ; i--){
            //             backwards += str[i]
            //     }
            //         return console.log(backwards);
            // }
            // reverser ("backwards");
// * `onlyVowels` - returns only the vowels from a word
//   * Examples:
//     * onlyVowels('Colin Jaffe') -> 'oiae'
//     * onlyVowels('quickly') -> 'ui'
//     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'
            // function onlyVowels (str){
            //     let newstring = "";
            //         for (let i=0; i<=str.length; i++){
            //             if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            //                 newstring += str[i]
            //             }
            //         }
            //         return console.log(newstring);
            // }
            // onlyVowels ("Colin Jaffe");


// ## Extra stretch goals

// * `crazyCase` - returns the given string with alternating lower and upper cases
//   * Examples:
//     * crazyCase('hello') -> 'hElLo'
//     * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
//     * crazyCase('YELLING') -> 'yElLiNg'
// * `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
//   * Examples:
//     * titleCase('return of the king') -> 'Return Of The King'
//     * titleCase('cOde iMMerSives') -> 'Code Immersives'
// * `camelCase` - returns the given string in camel case
//   * Examples:
//     * camelCase('oh Hello') -> 'ohHello'
//     * camelCase('well yeah of course') -> 'wellYeahOfCourse'
//     * camelCase('Boy howdy') -> 'boyHowdy'
// * `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
//   * Examples:
//     * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
//     * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'
    
