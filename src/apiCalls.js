export const getMovieData = (movieUrl) => {
   return fetch(movieUrl)
     .then(response => response.json())
     .then(movieData => movieData)
}

   export const getCharacters = (characterUrls) => {
   const char = characterUrls.map((characterUrl) => {
       return fetch(characterUrl)
         .then(response => response.json())
         .then(characterObj => {
            const { name, homeworld, species, films} = characterObj;
            console.log(name)
               return getHomeworld(homeworld)
               .then(data => ({data, name, species, films}));
            // Promise.all(characterInfo);
         })
         // .then(characterData => characterData);
   })

   return Promise.all(char);
}

const getHomeworld = (world) => {
   return fetch(world)
   .then(response => response.json())
   .then(homeWorld => homeWorld);
}