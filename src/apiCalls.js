export const getMovieData = (movieUrl) => {
   fetch(movieUrl)
     .then(response => response.json())
     .then(movieData => console.log(movieData))
}