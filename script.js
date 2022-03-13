const library = document.querySelector(".library-cards");
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

  const read = document.createElement("label");
  read.classList.add("switch");

  const readInput = document.createElement("input");
  readInput.type = "checkbox";
  readInput.checked = book.read ? true : false;
  read.appendChild(readInput);

  const span = document.createElement("span");
  span.classList.add("slider");
  read.appendChild(span);

  div.appendChild(read);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove Book";
  deleteBtn.addEventListener("click", (e) => {
    library.removeChild(div);
  });
  div.appendChild(deleteBtn);
}

addBooktoLibrary("Harry Potter", "JK Rowling", "935", true);
