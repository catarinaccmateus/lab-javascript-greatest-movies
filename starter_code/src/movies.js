/* eslint no-restricted-globals: 'off' */

  
// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (movieArray) {
    let sum = movieArray.reduce((accumulator, value, index, array) => {
      return accumulator + value["rate"];}, 0);
    let average = sum / movieArray.length;
    return average;
    }
    
    calculateAverageMovieRate(MOVIES);

/*other solution
function calculateAverageMovieRate (movieArray) {
    let sum = 0;
    for (let i = 0; i < movieArray.length; i++) {
    sum += movieArray[i]["rate"];
    }
    let average = sum / movieArray.length;
    return Math.round(average * 100) / 100;
    }
    
calculateAverageMovieRate (MOVIES);*/


function calculateAverageDramaRate (movieArray) {
    for (let i = 0; i < movieArray.length; i ++) {
    if (movieArray[i].genre.includes("Drama")) {
        const filteredmovieArray = movieArray.filter((value, index, originalArray) => {
        if (value["genre"].includes("Drama")) {
        return true;
        } else {
        return false;
        }
        });
         return calculateAverageMovieRate(filteredmovieArray);
    } else {
      return 0
    }
    }};    
    
    calculateAverageDramaRate (MOVIES);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear (movieArray) {

    let newMovieArray = [ ...movieArray];
    
    /*newMovieArray.sort((a, b) => {
     return a["year"] - b["year"]
    });*/

    newMovieArray.sort((a, b) => {
        if (a["year"] < b["year"]) return -1;
        if (a["year"] > b["year"]) return 1;
        if (a["title"] < b["title"]) return -1;
        if (a["title"] > b["title"]) return 1;
        });
    
    return newMovieArray
    }
    
    orderByYear(MOVIES);


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (A) {
if (A.length) {
    for (let value of A) {
    const filteredMovieArray = A.filter((value, index, originalArray) => {
      if (value["director"].includes("Steven Spielberg") && value["genre"].includes("Drama")) {
        return true;
      } else {
        return false;
      }
    });

    return filteredMovieArray.length;
    }} else {
        return 0;
    }
};

   countSpielbergDramaMovies(MOVIES);


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movieArray) {
    const movieArrayOrdered = movieArray.sort((a,b) => {
      if (a["title"] > b["title"]) {
        return 1;
      } else if (a["title"] < b["title"]) {
        return -1;
      } else {
        return 0;
      }
    }
    );
    return movieArrayOrdered.splice(0,20);
    };
    
//falta apenas retornar os titulos

    orderAlphabetically(MOVIES)


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
