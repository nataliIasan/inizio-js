const numberOfFilms = +prompt('Quanti film hai già guarato?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Uno degli ultimi film che hai visto?', ''),
      b = prompt('Di quanto lo valuteresti?'),
      c = prompt('Uno degli ultimi film che hai visto?', ''),
      d = prompt('Di quanto lo valuteresti?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);