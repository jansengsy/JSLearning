let re;

// Literal characters;
re = /hello/;
re = /hello/i;

// Meta-character symbols
re = /^h/;
re = /^h/i; // ^ = Must start with
re = /d$/i; // $ = Must end with
re = /World$/i;
re = /^hello$/i; // Must begin and end with
re = /^h.llo/i; // . = matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times

re = /gra?e?y/i; // Optional character (for grey or gray)
re = /gra?e?y\?/i; // \ = Escape characters

// Brackets [] = Character sets
re = /gr[ae]y/i; // Must be an a or an e
re = /[GF]rey/; // Must be uppercase G or F
re = /[^GF]rey/i; // Match anything OTHER THAN a G or an F
re = /[A-Z]rey/; // Match any uppercase letter
re = /[a-z]rey/; // Match any lowercase letter
re = /[A-Za-z]rey/; // Match any letter
re = /[0-9]rey/; // Match any digit

// Braces {} = Quantifiers
re = /hel{2}o/i; // Must occur exactly n amount of times - Quantifiers apply to the letter BEFORE it
re = /hel{2,4}o/i; // Range - must occur exactly m TO n times

// Parenthesis () - Grouping
re = /([0-9]x){3}/; // Matches a number between 0-9 followed by x, three {3} and only three times

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-word characters. For example '!'
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 1 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary. Will only match the word hell not the word hello, for example

// Assertions
re = /x(?=y)/; // Match X only if followed by y;
re = /x(?!y)/; // Match X only if NOT followed by y;

// String to match

const str = 'xadasdxy';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
