

const myLibrary = [];

function Book(name, author, year, read){
    this.name = name;
    this.author = author;
    this.year = year;
    this.id = crypto.randomUUID();
    this.read = read; 
}

function addBookToLibrary(name, author, year, read){
    const book = new Book(name, author, year, read)
    myLibrary.push(book)
}

addBookToLibrary("martin", "london", 1855)
addBookToLibrary("misery", "king", 2008)



function displayBook(){
    
    const bookContainer = document.getElementById("list");
    bookContainer.innerHTML = ""
    myLibrary.forEach(book=>{
    
    const itembook = document.createElement("li");
    itembook.textContent = `${book.name} by ${book.author} ${book.year} - ${book.read ? "Read" : "Not read"}`;
    
    
    bookContainer.appendChild(itembook)

    const toggleBtn = document.createElement("button");

    toggleBtn.textContent = "Toggle Read";
    toggleBtn.addEventListener("click", () => {
    toggleRead(book.id);
});

itembook.appendChild(toggleBtn);

const removeBtn =  document.createElement("button");
removeBtn.textContent = "Remove a book";
removeBtn.addEventListener("click", () => {
    removeBook(book.id)
})
    itembook.appendChild(removeBtn);
    }) 
}

function removeBook(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBook();
    }
}

function toggleRead(bookId) {
    const thisBook = myLibrary.find(book => book.id === bookId);
    if (thisBook) {
        thisBook.read = !thisBook.read;
        displayBook();
    }
}


displayBook()


document.getElementById("book-info").addEventListener("submit", function(e){
    e.preventDefault();

const bookname = document.getElementById("bookname").value;
const bookauthor = document.getElementById("bookauthor").value;
const bookyear = document.getElementById("bookyear").value;
const bookread = document.getElementById("bookread").checked;


addBookToLibrary(bookname,bookauthor,bookyear,bookread);
displayBook()
document.getElementById("book-info").reset();
});

