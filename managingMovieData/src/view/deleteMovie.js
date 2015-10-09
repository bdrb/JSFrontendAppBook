md.view.deleteMovie = {
	setupUserInterface: function () {
		var deleteButton = document.forms['Movie'].commit;
		var selectEl = document.forms['Movie'].selectMovie;
		var i = 0,
			key = "",
			keys = [],
			movie = null,
			optionEl = null;
		Book.loadAll();
		keys = Object.keys(Movie.instances);
		for (i = 0; i < keys.length; i++) {
			key = keys[i];
			book = Movie.instances[key];
			optionEl = document.createElement("option");
			optionEl.text = Movie.title;
			optionEl.value = Movie.mobieId;
			selectEl.add(optionEl, null);
		}
		deleteButton.addEventListener("click",
			pl.view.deleteBook.handleDeleteButtonClickEvent);
		window.addEventListener("beforeunload", function () {
			Book.saveAll();
		});
	},
	handleDeleteButtonClickEvent: function () {
		var selectEl = document.forms['Movie'].selectMovie;
		var movieId = selectEl.value;
		if (movieId) {
			Book.destroy(movieId);
			selectEl.remove(selectEl.selectedIndex);
		}
	}
};
