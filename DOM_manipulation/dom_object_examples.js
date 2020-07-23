let val;

val = document;
val = document.all;
val = document.all[1];
val = document.all.length; // This is because document.all returns an array
val = document.head;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// This is like all from the document model. We get a HTML collection.
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList; // We get a DOM token list of classes applied to the link

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArray = Array.from(scripts); // This is because they return HTML collections and NOT arrays
scriptsArray.forEach(function (script) {
  console.log(script);
});

console.log(val);
