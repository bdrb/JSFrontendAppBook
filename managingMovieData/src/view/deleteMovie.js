md.view.deleteMovie = {
    setupUserInterface: function () {
        var deleteButton = document.forms['Movie'].commit;
        var selectEl = document.forms['Movie'].selectMovie;
        var i = 0,
            key = "",
            keys = [],
            movie = null,
            optionEl = null;
        Movie.loadAll();
        keys = Object.keys(Movie.instances);
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            movie = Movie.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = movie.title;
            optionEl.value = movie.movieId;
            selectEl.add(optionEl, null);
        }
        deleteButton.addEventListener("click",
            md.view.deleteMovie.handleDeleteButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Movie.saveAll();
        });
    },
    handleDeleteButtonClickEvent: function () {
        var selectEl = document.forms['Movie'].selectMovie;
        var movieId = selectEl.value;
        if (movieId) {
            Movie.destroy(movieId);
            selectEl.remove(selectEl.selectedIndex);
        }
    }
};