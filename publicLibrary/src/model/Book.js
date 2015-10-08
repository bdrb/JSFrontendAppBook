function Book(slots) {
	'use strict';
	this.isbn = slots.isbn;
	this.title = slots.title;
	this.year = slots.year;
}

Book.instances = {};

Book.add = function (slots) {
	'use strict';
	var book = new Book(slots);
	Book.instances[slots.isbn] = book;
	console.log("Book " + slots.isbn + " created!");
};

Book.convertRow2Obj = function (bookRow) {
	'use strict';
	var book = new Book(bookRow);
	return book;
};

Book.loadAll = function () {
	'use strict';
	var i = 0,
		key = "",
		keys = [],
		booksString = "",
		books = {};
	try {
		if (localStorage["books"]) {
			booksString = localStorage["books"];
		}
	} catch (e) {
		alert("Error when reading\n" + e);
	}
	if (booksString) {
		books = JSON.parse(booksString);
		keys = Object.keys(books);
		console.log(keys.length + "books loaded.");
		for (i = 0; i < keys.length; i++) {
			key = keys[i];
			Book.instances[key] = Book.convertRow2Obj(books[key]);
		}
	}
};

Book.update = function (slots) {
	'use strict';
	var book = Book.instances[slots.isbn],
		year = parseInt(slots.year);
	if (book.title !== slots.title) {
		book.title = slots.title;
	}
	if (book.year !== slots.year) {
		book.year = slots.year;
	}
	console.log("Book " + slots.isbn + " modified!");
};

Book.destroy = function (isbn) {
	'use strict';
	if (Book.instances[isbn]) {
		console.log("Book " + isbn + " deleted.");
		delete Book.instances[isbn];
	} else {
		console.log("There is no book with ISBN " + isbn + " in database!");
	}
};

Book.saveAll = function () {
	var bookString = "",
		error = false,
		nmrOfBoooks = Object.keys(Book.instances).length;
	try {
		bookString = JSON.stringify(Book.instances);
		localStorage["books"] = bookString;
	} catch (e) {
		alert("Error when writing to local storage\n " + e);
	}
	if (!error) {
		console.log(nmrOfBoooks + " books saved.");
	}
};

Book.createTestData = function () {
	Book.instances["01"] = new Book({
		isbn: "01",
		title: "book01",
		year: "2001"
	});
	Book.instances["02"] = new Book({
		isbn: "02",
		title: "book02",
		year: "2002"
	});
	Book.instances["03"] = new Book({
		isbn: "03",
		title: "book03",
		year: "2003"
	});
	Book.saveAll();
};

Book.clearData = function () {
	if (confirm("Do you really want to delete all book data?")) {
		localStorage["books"] = "{}";
	}
};