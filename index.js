/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let allTitlesArr = []

  for (let movie of movies){
    allTitlesArr.push(movie.title);
  }
    return allTitlesArr;
}
//console.log(getAllMovieTitles(exampleMovies))
/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetaScore = 0;

  for (let movie of movies){
    if (Number(movie.metascore) > highestMetaScore){
      highestMetaScore = Number(movie.metascore);
    }
  } 
    return highestMetaScore;
}
//console.log(getHighestMetascore(exampleMovies));
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let sumOfIMDB = 0;

  if (!movies.length){
    return sumOfIMDB;
  }
    for (let movie of movies){
      sumOfIMDB += Number(movie.imdbRating);
  }
    let avgRating = sumOfIMDB/movies.length
    return avgRating;
}
//getAverageIMDBRating(exampleMovies);
/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
    let movieRatingsObj = {};

    for (let movie of movies){
      if (!movieRatingsObj[movie.rated]){
        movieRatingsObj[movie.rated] = 1;
      } else if (movieRatingsObj[movie.rated]){
        movieRatingsObj[movie.rated] += 1;
      }
    }
      return movieRatingsObj;
}
//console.log(countByRating(exampleMovies));
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, ID) {
  let movieObj = null; 

  if(!movies.length){
    return null;
  } 
    for (let movie of movies){
      if (movie.imdbID === ID){
        movieObj = movie;
      } 
    } 
      return movieObj;
  }   
      

//console.log(findById(exampleMovies, "tt1979376"));
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genresS) {
  let matchingGenresArr = [];
  let genreArr = [];
  let genres = genresS[0].toUpperCase() + genresS.slice(1).toLowerCase() // capitalizes first letter, lower cases each letter after

  if (!movies.length){
    return [];
  }
    for(let movie of movies){
      let movieGenre = movie.genre;
        genreArr = movieGenre.split(", ");
      
        if (genreArr.includes(genres)){
          matchingGenresArr.push(movie)
      }
    } 
    return matchingGenresArr;//console.log(matchingGenresArr);
}
//console.log(filterByGenre(exampleMovies,"fantasy"))
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
   let releasedYearArr = [];
   let movieArray = []

   if(!movies.length){
     return [];
   } 
    for (let movie of movies){
      let releasedYear = movie.released;
        releasedYearArr = releasedYear.split(" ");

        if (year >= releasedYearArr[2]){
          movieArray.push(movie);
        }
    }
    return movieArray;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let highestGrossingMovie = [];
  let highestAmount;
  let highestAmountArr = [];
  let grossedTitleObj ={}

  if(!movies.length){
    return null;
  }
    for(let movie of movies){
      let boxofficeAmount = movie.boxOffice.slice(1);// trying to get rid of $
      let splitAmount = boxofficeAmount.split(",");// creating an array to later join 

      highestAmount = splitAmount.join('');// got rid of , using this method, still a string
      highestAmountArr.push(Number(highestAmount));// creating an array of numbers

      highestGrossingMovie.push(movie.title);// pushing the corresponding titles into array
    }
      let maxGrossed = highestAmountArr[0];
      for(let i = 1; i < highestAmountArr.length; i++){
        if (maxGrossed < highestAmountArr[i]){
          maxGrossed = highestAmountArr[i];
          highestGrossed = highestGrossingMovie[i];
        }
      }
        return highestGrossed;
} 
getBiggestBoxOfficeMovie(exampleMovies)

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
