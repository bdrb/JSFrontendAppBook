md.view.listMovies = {
    setupUserInterface: function () {
        var tableBodyEl = document.querySelector("table#movies>tbody");
        var i = 0,
            keys = [],
            key = "",
            row = {};
        Movie.loadAll();
        keys = Object.keys(Movie.instances);
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Movie.instances[key].movieId;
            row.insertCell(-1).textContent = Movie.instances[key].title;
            row.insertCell(-1).textContent = Movie.instances[key].reliseDate;
        }
    }
};