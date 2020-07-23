// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let val;

const today = new Date();
let birthday = new Date('6-10-1992 11:25:00'); // Gotta do it in American format
birthday = new Date('June 10 1992');
birthday = new Date('6/10/1992');

val = today.getMonth(); // Note: Date month is 0 based. So January = 0, February = 1...etc.
val = today.getDate();
val = today.getDay(); // Numerical representation of the day. Sunday = 0, Monday = 1, Tuesday = 2...etc.
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(4);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(val);
