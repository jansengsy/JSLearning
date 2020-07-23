// WINDOW METHODS / OBJECTS / PROPERTIES

// These are all window methods. For example: alert() = window.alert()

// Alert
// alert('Hello world!');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure?')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

let val;

// Outer height + width (from edge of window to edge of window)
val = window.outerHeight;
val = window.outerWidth;

// Inner height + width (from inside the window - excluding scroll bars, dev tools, etc. )
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollX;
val = window.scrollY;

// Location Object - Contains things like: host, hostname, port, path, href, origin, protocol (http/s), reload, replace, redirect, query string, etc.
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // Example: http://localhost:5500?id=1 <--- This will return that parameter
// val = window.location.href = 'http://google.com'; // We can redirect with this
//val = window.location.reload();

// History Object

// window.history.go(); // Take us back to where we came from. We can add parameters to go back x number of times. For example: window.history.go(-2) will take us back two

val = window.history.length;

// NAVIGATOR OBJECT

val = window.navigator; // Gives us a bunch of info on the browser and pc

val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
