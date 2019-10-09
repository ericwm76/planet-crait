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
            const { name, homeworld, species, films } = characterObj;
            return getHomeworld(homeworld)
               .then(worldObj => ({name, species, films, homeWorldName: worldObj.name, homeWorldPop: worldObj.population}))
            // Promise.all(characterInfo);
         })
         // .then(characterData => characterData);
   })

   return Promise.all(char);
}

const getHomeworld = (worldUrl) => {
   return fetch(worldUrl)
   .then(response => response.json())
   .then(homeWorld => ({ name: homeWorld.name, population: homeWorld.population }));
}