md.view.updateMovie = {
    setupUserInterface: function () {
        var formEl = document.forms['Movie'],
            saveButton = formEl.commit,
            selectMovieEl = formEl.selectMovie;
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
            selectMovieEl.add(optionEl, null);
        }
        selectMovieEl.addEventListener("change", function () {
            var book = null,
                key = selectMovieEl.value;
            if (key) {
                movie = Movie.instances[key];
                formEl.movieId.value = movie.movieId;
                formEl.title.value = movie.title;
                formEl.reliseDate.value = movie.reliseDate;
            } else {
                formEl.reset();
            }
        });
        saveButton.addEventListener("click", md.view.updateMovie.handleUpdateButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Movie.saveAll();
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