// Module pattern:

// Basic structure

// IFFE (Immediately invoked function expression)
(function () {
  // Declare private variables and functions

  return {
    // Declare public var and functions
  };
})();

// STANDARD MODULE PATTERN
const UICtrl = (function () {
  let text = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText(); - This will error as we don't have access to it
// console.log(UICtrl.text);

// REVEALING MODULE PATTER
const ItemCtrl = (function () {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item added');
  }

  function get(id) {
    return _data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add, // Same as add: add
    get,
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
console.log(ItemCtrl.get(1));

// Standard module patters is a bit more powerful, as you can change a bit (see the example line 24)
// Reference pattern is cleaner
