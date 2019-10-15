export const getMovieData = (movieUrl) => {
   return fetch(movieUrl)
     .then(response => response.json())
     .then(movieData => movieData)
     .catch(err => console.log('error!', err))
}

export const getCharacters = (characterUrls) => {
   const char = characterUrls.slice(0, 10).map((characterUrl) => {
       return fetch(characterUrl)
         .then(response => response.json())
         .then(characterObj => {
            const { films, homeworld, species } = characterObj;
            let promise1 = getFilms(films).then(filmTitle => filmTitle);
            let promise2 = getHomeworld(homeworld).then(worldObj => ({homeWorldName: worldObj.name, homeWorldPop: worldObj.population}));
            let promise3 = getSpecies(species).then(speciesObj => speciesObj.name)
            return Promise.all([promise1, promise2, promise3]).then(data => ({name: characterObj.name, species: data[2], homeworldName: data[1].homeWorldName, homeworldPop: data[1].homeWorldPop, appearsIn: data[0], favorited: false}))
         })
        .catch(err => console.log('error!', err))
   }) 

   return Promise.all(char);
}

export const getHomeworld = worldUrl => {
   return fetch(worldUrl)
   .then(response => response.json())
   .then(homeWorld => ({ name: homeWorld.name, population: homeWorld.population }))
   .catch(err => console.log('error!', err))
}

export const getFilms = filmUrls => {
   const films = filmUrls.map(filmUrl => {
      return fetch(filmUrl)
      .then(response => response.json())
      .then(filmObj => filmObj.title)
      .catch(err => console.log('error!', err))
   })
   return Promise.all(films);
}

export const getSpecies = species => {
   return fetch(species[0])
   .then(response => response.json())
   .then(species => species)
   .catch(err => console.log('error!', err))
}