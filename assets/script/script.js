function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];

myLibrary.push(new Book("The Call of The Wild", "Jack London", "80"));
myLibrary.push(
  new Book("Hitchiker's Guide to The Galaxy", "Douglas Adams", "250", true)
);

const library = document.getElementById("library");
function render() {
  myLibrary.forEach((item) => {
    const row = document.createElement("tr");
    
    const bookId = document.createElement("th");
    bookId.scope = "row";
    bookId.textContent = myLibrary.indexOf(item) + 1;
    const bookTitle = document.createElement("td");
    bookTitle.textContent = item.title;
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = item.author;
    const bookPages = document.createElement("td");
    bookPages.textContent = item.pages;
    const bookRead = document.createElement("td");
    bookRead.textContent = item.read;

    const bookRemove = document.createElement("td");
    const removeButton = document.createElement('div');
    removeButton.className = 'align-middle btn btn-danger p-1'
    bookRemove.appendChild(removeButton)
    removeButton.textContent = "DELETE";

    row.appendChild(bookId);
    row.appendChild(bookTitle);
    row.appendChild(bookAuthor);
    row.appendChild(bookPages);
    row.appendChild(bookRead);
    row.appendChild(bookRemove);
    library.appendChild(row);
  });
}
render();

const addBookSectionButton = document.getElementById("addBookSectionButton");

const addBookSection = document.getElementById("addBookSection");

function showAddSection() {
  if (addBookSectionButton.innerHTML === "CLOSE ADD BOOK SECTION") {
    addBookSection.style.display = "none";
    addBookSectionButton.innerHTML = "OPEN ADD BOOK SECTION";
  } else {
    addBookSection.style.display = "block";
    addBookSectionButton.innerHTML = "CLOSE ADD BOOK SECTION";
  }
}

addBookSectionButton.addEventListener("click", showAddSection);

function addLastBook() {
  const item = myLibrary[myLibrary.length - 1];
  const row = document.createElement("tr");

  const bookId = document.createElement("th");
  bookId.scope = "row";
  bookId.textContent = myLibrary.indexOf(item) + 1;
  const bookTitle = document.createElement("td");
  bookTitle.textContent = item.title;
  const bookAuthor = document.createElement("td");
  bookAuthor.textContent = item.author;
  const bookPages = document.createElement("td");
  bookPages.textContent = item.pages;
  const bookRead = document.createElement("td");
  bookRead.textContent = item.read;

  const bookRemove = document.createElement("td");
  bookRemove.textContent = "remove?";

  row.appendChild(bookId);
  row.appendChild(bookTitle);
  row.appendChild(bookAuthor);
  row.appendChild(bookPages);
  row.appendChild(bookRead);
  row.appendChild(bookRemove);
  library.appendChild(row);
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector('input[name="read"]:checked').value;

  myLibrary.push(new Book(title, author, pages, read));
  addLastBook();
  document.getElementsByTagName("form")[0].reset();
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addBookToLibrary);
