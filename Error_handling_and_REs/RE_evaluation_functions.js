// Regular Expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
let re;
re = /hello/i; // We have added the case insensitive flag

// Flags:

// i - Case insensitive
// g - Global (looks for all matches, not just the first one)
// m - Multiline mode
// s - Dotall mode ('.' will now match '/n')
// u - Enables full unicode support
// y - Sticky mode

console.log(re);
console.log(re.source);

// FUNCTIONS TO EVALUATE REGULAR EXPRESSIONS

// exec() - return the result in an array if match, null if no match
const result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - returns true of false based on match
const testResult = re.test('hello');
console.log(testResult);

// match() - return result array or null
const str = 'Hello There';
const matchResult = str.match(re);
console.log(matchResult);

// search() - return index of the first match if not found, returns -1
const strr = 'Hello There';
const searchResult = strr.search(re);
console.log(searchResult);

// replace() - return a new string with some or all matches of a pattern
const strrr = 'Hello There';
const newString = strrr.replace(re, 'Hi');
console.log(newString);
