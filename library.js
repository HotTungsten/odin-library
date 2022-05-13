let myLibrary = [];
const bookTable = document.getElementById('book-table');
let tableIndex = 0;

function book(author, title, pages, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + hasBeenRead;
    }

    this.toggleRead = function() {
        if(hasBeenRead === "not read") {
            hasBeenRead = "read";
        }
        else {
            hasBeenRead = "not read";
        }
    }
}

function addBookToLibrary() {

}

function addLibraryToPage(myLibrary) {
    for(let i = 0; i < myLibrary.length; i++){
        let row = bookTable.insertRow(-1);
        let authorCell = row.insertCell(0);
        let titleCell = row.insertCell(1);
        let pageCell = row.insertCell(2);
        let readStatusCell = row.insertCell(3);

        authorCell.innerHTML = myLibrary[i].author;
        titleCell.innerHTML = myLibrary[i].title;
        pageCell.innerHTML = myLibrary[i].pages;
        readStatusCell.innerHTML = myLibrary[i].hasBeenRead;
    }
}

const book1 = new book("J.R.R. Tolkien", "The Hobbit", "295", "not read");
console.log(book1.info());

myLibrary.push(book1);
addLibraryToPage(myLibrary);