const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // List of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mess message
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const brad = new User('Brad');
const kees = new User('Kees');
const john = new User('John');
const jeff = new User('Jeff');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(kees);
chatroom.register(john);
chatroom.register(jeff);

brad.send('Hello Jeff', jeff);
kees.send('Hello Brad', brad);
john.send('Hello everyone');
