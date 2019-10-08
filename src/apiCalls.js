export const getMovieData = (movieUrl) => {
   return fetch(movieUrl)
     .then(response => response.json())
     .then(movieData => movieData)
}

export const getCharacters = (characterUrls) => {
   const char = characterUrls.map((characterUrl) => {
       return fetch(characterUrl)
         .then(response => response.json())
         .then(characterData => characterData)
   })

   return Promise.all(char);
}