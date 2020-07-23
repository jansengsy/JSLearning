// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><a href='#' class="delete">X</a></td>`;
  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const parent = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  parent.insertBefore(div, form);
  setTimeout(clearAlert, 2000);
};

UI.prototype.deleteBook = function (book) {
  if (book.className === 'delete') {
    book.parentNode.parentNode.remove();
  }
};

function clearAlert() {
  const alert = document.querySelector('.alert');
  alert.remove();
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please enter all fields', 'error');
  } else {
    const book = new Book(title, author, isbn);
    ui.addBookToList(book);
    ui.showAlert('Book successfully added', 'success');
  }

  ui.clearFields();
});

document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book deleted', 'success');
  e.preventDefault();
});
