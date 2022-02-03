let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages}, Read status ${read}`;
    };
}

const defaultBook = new book(
    "The Theory of Everything",
    "Stephen Hawking",
    "64",
    true
);
myLibrary.push(defaultBook);

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("read").checked;
    // console.log(title, author, pages, isRead);

    if (myLibrary.some((item) => item.title === title)) {
        alert("This book already exists in your library");
        return;
    }

    const newBook = new book(title, author, pages, isRead);
    myLibrary.push(newBook);
    // console.log(myLibrary);
    displayLibrary(newBook);
}

function removeBook(e) {
    const parentNode = e.parentElement;
    // console.log(parentNode);
    parentNode.remove();
}

const booksList = document.querySelector(".booksList");

function displayLibrary(book) {
    const itemBody = document.createElement("div");
    const titlePara = document.createElement("p");
    const authorPara = document.createElement("p");
    const pagesPara = document.createElement("p");
    const readPara = document.createElement("p");
    const deleteBttn = document.createElement("button");

    itemBody.classList.add("items");
    deleteBttn.setAttribute("onclick", "removeBook(this)");

    titlePara.textContent = `Title: ${book.title}`;
    authorPara.textContent = `Author: ${book.author}`;
    pagesPara.textContent = `Pages: ${book.pages}`;
    readPara.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    deleteBttn.textContent = `Delete`;

    itemBody.appendChild(titlePara);
    itemBody.appendChild(authorPara);
    itemBody.appendChild(pagesPara);
    itemBody.appendChild(readPara);
    itemBody.appendChild(deleteBttn);
    booksList.appendChild(itemBody);
}

const addBook = document.querySelector(".add-book");
const modalBg = document.querySelector(".modal-bg");

addBook.addEventListener("click", () => {
    modalBg.classList.add("modal-active");
});

const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", () => {
    modalBg.classList.remove("modal-active");
});

function loopLibrary() {
    myLibrary.forEach(function (book) {
        displayLibrary(book);
    });
}

loopLibrary();
