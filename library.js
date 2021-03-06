let myLibrary = [];

// constructor
function Book(title, author, pages, hasBeenRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;

	this.info = function() {
		return this.title;
	}
}

function addBookToLibrary() {
    newBook = prompt("Enter a book title:");
    myLibrary.push(newBook);
}

function displayBooks(table) {

    for (let book of myLibrary) {
        let row = table.insertRow();

        for (key in book) {

            if (typeof book[key] === "function") continue;

            let cell = row.insertCell();
            let text = document.createTextNode(book[key]);
            cell.appendChild(text);
        }
    }
    if (! document.querySelector("thead")) createTableHead(table);
}

function createTableHead(table) {
    let tHead = table.createTHead();
    let row = tHead.insertRow();

    let colHeaders = [
        "Title",
        "Author",
        "Pages",
        "Has Been Read",
    ]

    for (let key in colHeaders) {
        let th = document.createElement("th");
        let text = document.createTextNode(colHeaders[key]);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function createTable() {
    let table = document.createElement("table");
    document.body.appendChild(table);
    
    return table;
}

// example books

let mobyDick = new Book(
    "Moby Dick", 
    "Derpus Wreckus",
    120,
    false
);

let alice = new Book(
    "Alice in Wonderland", 
    "Someone Author",
    400,
    true
);

let poe = new Book(
    "Poe's Greatest Works", 
    "Edgar Allen Poe",
    290,
    true
);

myLibrary.push(mobyDick, alice, poe);

let table = createTable();
displayBooks(table);
// console.log(myLibrary)
