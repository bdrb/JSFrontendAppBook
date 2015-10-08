function Movie(slots) {
    this.movieId = slots.movieId;
    this.title = slots.title;
    this.reliseDate = slots.reliseDate;
}

Movie.instances = {};

Movie.add = function (slots) {
    var movie = new Movie(slots);
    Movie.instances[movie.movieId] = movie;
};
Movie.loadAll = function () {
    var i = 0,
        key = "",
        keys = [],
        movies = {},
        moviesString = "";

    moviesString = LocalStorage['movies'];
    movies = JSON.parse(moviesString);
    keys = Object.keys(movies);

    Movie.instances = {};
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        Movie.instances[key] = Movie.convertRow2Obj(movies[key]);
    }

};
Movie.convertRow2Obj = function (movieRow) {
    var movie = new Movie(movieRow);
    return movie;
};
Movie.update = function (slots) {
    Movie.instances[slot.movieId].title = slots.title;
    Movie.instances[slot.movieId].reliseDate = slots.reliseDate;
};
Movie.destroy = function (movieId) {
    delete Movie.instances[movieId];
};
Movie.saveAll = function () {
    var error = false;
    try {
        localStorage['movies'] = JSON.stringify(Movie.instances);
    } catch (error) {
        console.log("saving error : " + e);
    }
    if (!error) {
        alert("saving error : " + e);
    }
};
Movie.clearData = function () {
    if (confirm("Do you really want erase all movie data?")) {
        localStorage['movies'] = {};
    }
};
Movie.createTestData = function () {
    Movie.instances = {};
    Movie.instances["01"] = new Movie({
        movieId: "01",
        title: "Qw - wq?",
        reliseData: new Date(1987, 12, 09);
    });
    Movie.instances["02"] = new Movie({
        movieId: "02",
        title: "Hh: bbb jh cooooo.",
        reliseData: new Date(1976, 10, 19);
    });
    Movie.instances["03"] = new Movie({
        movieId: "03",
        title: "Nmn & Llloi",
        reliseData: new Date(1965, 08, 29);
    });
};