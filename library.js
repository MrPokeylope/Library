function Book(title, author, pages, hasBeenRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasBeenRead = hasBeenRead;

	this.info = function() {
		return this.title;
	}
}