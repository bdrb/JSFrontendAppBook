md.view.createMovie = {
	setupUserInterface: function () {
		var saveButton = document.forms['Movie'].commit;
		Movie.loadAll();
		saveButton.addEventListener("click",
			md.view.createMovie.handleSaveButtonClickEvent);
		window.addEventListener("beforeunload", function () {
			Movie.saveAll();
		});
	},
    handleSaveButtonClickEvent: function () {
		var formEl = document.forms['Movie'];
		var slots = {
			movieId: formEl.movieId.value,
			title: formEl.title.value,
			year: formEl.reliseDate.value
		};
		Movie.add(slots);
		formEl.reset();
	},
};
