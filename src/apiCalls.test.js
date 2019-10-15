import React from 'react';
import { shallow } from 'enzyme';
import { getMovieData, getCharacters, getHomeworld, getSpecies, getFilms } from './apiCalls'

describe('API Calls', () => {
  describe('getMovieData', () => {
    const mockMovieData = {
      url: "https://swapi.co/api/films/4/",
      episode_id: 1,
      title: "The Phantom Menace",
      release_date: "1999",
      img: "https://images-na.ssl-images-amazon.com/images/I/51o6zchqOFL.jpg"
    };
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovieData)
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      getMovieData("https://swapi.co/api/films/4/");
  
      expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/films/4/")
    });

    it('should return a movie\'s data (Happy path)', () => {
      getMovieData().then(results => expect(results).toEqual(mockMovieData));
    });

    it('should return an error if response is not ok (Sad path)', () => {  
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
  
      expect(getMovieData()).rejects.toEqual(Error('Error fetching data'))
    });

    it('should return an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Fetch failed."))
      });
  
      expect(getMovieData()).rejects.toEqual(Error("Fetch failed."))
    });
  });
});