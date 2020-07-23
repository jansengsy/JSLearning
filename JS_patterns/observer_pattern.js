class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // Filter out frm the list whatever matches the callback function. If there is no
    // match, the callback gets to stay on the list. The filter returns a new list and
    // reassigns the list of observers
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from the function ${fn.name}`);
  }

  fire() {
    this.observers.forEach((fn) => {
      fn.call();
    });
  }
}

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click handler
const getCurrentMilliseconds = function () {
  console.log(`Current MS: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
