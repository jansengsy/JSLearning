class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {}

  addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><a href='#' class="delete">X</a></td>`;
    list.appendChild(row);
  }

  deleteBook(book) {
    if (book.className === 'delete') {
      book.parentElement.remove();
    }
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const parent = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    parent.insertBefore(div, form);
    setTimeout(this.clearAlert, 2000);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  clearAlert() {
    const alert = document.querySelector('.alert');
    alert.remove();
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks());

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
    Store.addBook(book);
    ui.showAlert('Book successfully added', 'success');
  }

  ui.clearFields();
});

document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  Store.removeBook(e.target.previousElementSibling.textContent);
  ui.deleteBook(e.target);
  ui.showAlert('Book deleted', 'success');
  e.preventDefault();
});
