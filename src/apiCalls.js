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
            let promise1 = getFilms(films).then(filmTitle => filmTitle);
            let promise2 = getHomeworld(homeworld).then(worldObj => ({homeWorldName: worldObj.name, homeWorldPop: worldObj.population}));
            return Promise.all([promise1, promise2]).then(data => console.log('data from promise.all--->', data))
         })
   })

   return Promise.all(char);
}

const getHomeworld = (worldUrl) => {
   return fetch(worldUrl)
   .then(response => response.json())
   .then(homeWorld => ({ name: homeWorld.name, population: homeWorld.population }));
}

const getFilms = (filmUrls) => {
   const films = filmUrls.map(filmUrl => {
      return fetch(filmUrl)
      .then(response => response.json())
      .then(filmObj => filmObj.title)
   })
   return Promise.all(films);
}