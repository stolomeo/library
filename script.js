/*
function addBooktoLibrary
push title, author, pages, and read value into myLibrary[];

function create card
take each array in myLibrary and create card

submit button
create card, clear form, prevent refresh
*/

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.retrieveValues = function () {};

function addBooktoLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function formSubmit(event) {
  event.preventDefault();
  addBooktoLibrary(title.value, author.value, pages.value, read.checked);
  console.log(myLibrary);
  formClear();
}

const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", formSubmit);

function formClear() {
  (title.value = ""), (author.value = ""), (pages.value = "");
  read.checked = false;
}
