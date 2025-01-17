let text = "Apple, Banana, Kiwi";
let slicexp = text.slice(7,13);
console.log(slicexp);
let substringexp = text.substring(7,13);
console.log(substringexp);
let substrexp = text.substr(7,6);
console.log(substrexp);
let upper = text.toUpperCase();
console.log(upper);
let lower = text.toLowerCase();
console.log(lower);
let concres = slicexp.concat(" ",substringexp);
console.log(concres);

let text1 = "     !!Hello!!     ";
console.log(text1.trimStart());
console.log(text1.trimEnd());
console.log(text1.trim());

let text2 = "Hello!!";
console.log(text2.padStart(4,"0"));
console.log(text2.padEnd(4,"0"));
console.log(text2.repeat(2));
console.log(text2.replace("Hello","Hiii"));
console.log(text.split(","));

// let text1 = "A";
// let text2 = "B";
// let result = text1 > text2;
// console.log(result);

x = 5;
y =2;
z = x ** y;
console.log(z);