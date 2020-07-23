// document.getElementsByClassName()

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[1]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// We can combine document functions. This applies the getElementsByClassName to the scope of the first UL on the page, rather than being global
const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[1]);
lis[0].style.color = 'blue';
lis[3].textContent = 'Hey';

// Remember - these functions return a HTML collection NOT an array.
// They operate similarly and have a lot of the same properties like length, but they aren't the same.

// Converting to an array:
lis = Array.from(lis);

// Now we can perform array functions on the collection
lis.reverse();

lis.forEach(function (li, index) {
  //console.log(li.className);
  li.textContent = `${index}: Hello`; // remember we applied the reverse function so this will be reversed
});

// document.querySelectorAll

// To make things more confusing, this selector returns a node list NOT a HTML Collection
// (https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
const items2 = document.querySelectorAll('ul.collection li.collection-item'); // You can put any kind of css selectors in here

items2.forEach(function (item) {
  item.textContent = 'Hello';
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li) {
  li.style.background = 'LightGrey';
});

liEven.forEach(function (li) {
  li.style.background = 'LightBlue';
});

console.log(items2);
