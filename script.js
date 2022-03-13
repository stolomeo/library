/*
function addBooktoLibrary
push title, author, pages, and read value into myLibrary[];

function create card
take each array in myLibrary and create card

submit button
create card, clear form, prevent refresh
*/
const library = document.querySelector(".library-cards");
const card = document.querySelector(".card");
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBooktoLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBook(newBook);
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

function displayBook(book) {
  const div = document.createElement("div");
  div.classList.add("card");
  library.appendChild(div);

  const title = document.createElement("h3");
  title.innerText = `${book.title}`;
  div.appendChild(title);

  const author = document.createElement("p");
  author.innerText = `Author: ${book.author}`;
  div.appendChild(author);

  const pages = document.createElement("p");
  pages.innerText = `Pages: ${book.pages}`;
  div.appendChild(pages);

  const read = document.createElement("p");
  if (book.read) {
    read.innerText = "Read";
  } else {
    read.innerText = "Unread";
  }
  div.appendChild(read);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove Book";
  deleteBtn.addEventListener("click", (e) => {
    library.removeChild(div);
  });
  div.appendChild(deleteBtn);
}

addBooktoLibrary("Harry Potter", "JK Rowling", "935", true);
