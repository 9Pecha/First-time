const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i<numberOfFilms; i++){
    var Film = prompt("Какой фильм вы смотрели?", "");
    if (Film === "" || Film === null || Film.length > 50){
        console.log("Четко");
        alert("Названия нет! Попробуйте еще раз.");
        i--;
        continue;
    }
    const Rate = prompt("Как вы его оцениваете?", "");
    personalMovieDB.movies[Film] = Rate;
}

if (personalMovieDB.count<10){
    alert("Мало");
} 
else if (personalMovieDB.count>=10 && personalMovieDB.count <= 30) {
    alert("Norm");
}
else if (personalMovieDB.count >= 30){
    alert("Mnoga");
}
else {
    alert("Error");
}

console.log(personalMovieDB);