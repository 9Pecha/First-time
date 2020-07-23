"use strict";

function showMyDB() {
    if (personalMovieDB.privat === false){
        return personalMovieDB;
    }
}

function checkTheAnswer(text){
    let flag = 0;
    if (text === "" || text === null || text.length > 50){
        console.log("Четко");
        alert("Названия нет! Попробуйте еще раз.");
        flag = 1;
    }
    return flag;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function writeYourGenres() {
    const Genres = {
        0: "Action",
        1: "Comedy",
        2: "Drama",
        3: "Fantasy",
        4: "Historical",
        5: "Horror",
        6: "Mystery",
        7: "Political",
        8: "Romance"
    };
    for (let i = 0; i<3; i++){
        const FirstGenre = Genres[getRandomInt(0, 9)];
        const SecondGenre = Genres[getRandomInt(0, 9)];
        const ThirdGenre = Genres[getRandomInt(0, 9)];
        const FourthGenre = Genres[getRandomInt(0, 9)];
        personalMovieDB.genres[i] = prompt(`What genre do u like? 1)${FirstGenre}  2)${SecondGenre}
           3)${ThirdGenre}  4)${FourthGenre}`);
        if (checkTheAnswer(personalMovieDB.genres[i]) === 1){
            i--;
            continue;
        }
        switch (personalMovieDB.genres[i]) {
            case "1": personalMovieDB.genres[i] = FirstGenre;
                break;
            case "2": personalMovieDB.genres[i] = SecondGenre;
                break;
            case "3": personalMovieDB.genres[i] = ThirdGenre;
                break;
            case "4": personalMovieDB.genres[i] = FourthGenre;
                break;
        }
    }
    //console.log(personalMovieDB.genres);
    return personalMovieDB.genres;
}

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i<numberOfFilms; i++){
    const Film = prompt("Какой фильм вы смотрели?", "");
    if (checkTheAnswer(Film) === 1){
        i--;
        continue;
    }
//    if (Film === "" || Film === null || Film.length > 50){
//        console.log("Четко");
//        alert("Названия нет! Попробуйте еще раз.");
//        i--;
//        continue;
//    }
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

//console.log(personalMovieDB);

console.log("My personal movie DB: ", showMyDB());
console.log("U genres: ", writeYourGenres());
//riteYourGenres();