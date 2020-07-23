// Singleton pattern
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ object: 'Object instance' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceB);

console.log(instanceA === instanceB);
