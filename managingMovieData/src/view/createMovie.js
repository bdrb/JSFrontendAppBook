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
        var formEl = document.forms['Movie'],
            reliseDate;
        try {
            reliseDate = new Date(Date.parse(formEl.reliseDate.value)).toISOString();
        } catch (e) {
            alert(e);
        }

        var slots = {
            movieId: formEl.movieId.value,
            title: formEl.title.value,
            reliseDate: reliseDate
        };
        Movie.add(slots);
        formEl.reset();
    },
};