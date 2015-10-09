pl.view.updateMovie = {
	setupUserInterface: function () {
		var formEl = document.forms['Movie'],
			saveButton = formEl.commit,
			selectBookEl = formEl.selectMovie;
		var i = 0,
			key = "",
			keys = [],
			movie = null,
			optionEl = null;
		Movie.loadAll();
		keys = Object.keys(Movie.instances);
		for (i = 0; i < keys.length; i++) {
			key = keys[i];
			book = Movie.instances[key];
			optionEl = document.createElement("option");
			optionEl.text = movie.title;
			optionEl.value = movie.movieId;
			selectMovieEl.add(optionEl, null);
		}
		selectBookEl.addEventListener("change", function () {
			var book = null,
				key = selectMovieEl.value;
			if (key) {
				book = Movie.instances[key];
				formEl.movieId.value = movie.movieId;
				formEl.title.value = movie.title;
				formEl.reliseDate.value = movie.reliseDate;
			} else {
				formEl.reset();
			}
		});
		saveButton.addEventListener("click", pl.view.updateBook.handleUpdateButtonClickEvent);
		window.addEventListener("beforeunload", function () {
			Book.saveAll();
		});
	},
	handleUpdateButtonClickEvent: function () {
		var formEl = document.forms['Movie'];
		var slots = {
			movieId: formEl.movieId.value,
			title: formEl.title.value,
			reliseDate: formEl.reliseDate.value
		};
		Movie.update(slots);
		formEl.reset();
	}
};
