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
	var i = 0, moviesString = "";
	moviesString = LocalStorage['movies'];
	keys = Ob
};
Movie.convertRow2Obj = function (movieRow) {
	var movie = new Movie(movieRow);
	return movie;
};
Movie.update = function () {};
Movie.destroy = function () {};
Movie.saveAll = function () {};
Movie.clearData = function () {};
Movie.createTestData = function () {};

