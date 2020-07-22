const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: [],
    genres: [],
    privat: false
};

const LastFilm = prompt("Один из последних просмотренных фильмов?", "");
const Rate = +prompt("На сколько оцените?", "");

personalMovieDB.movies[LastFilm] = Rate;

console.log(personalMovieDB);