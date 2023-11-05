import axios from "axios";

const URL = "https://api.themoviedb.org/3/"
const params = new URLSearchParams({
    api_key: 'fbaf0d2e5045632a4f9c1a9b28b2fdb1',
    language: 'en-US',
});
const paramsQuery = new URLSearchParams({
    api_key: 'fbaf0d2e5045632a4f9c1a9b28b2fdb1',
    language: 'en-US',
    include_adult: false,
    query: '',
});

  
//список найпопулярніших фільмів на сьогодні
export const fetchTrending = async () => {
  const response = await axios.get(`${URL}trending/movie/day?${params}`);
  return response.data;
};

//пошук фільму за ключовим словом на сторінці фільмів
//https://api.themoviedb.org/3/search/movie?query=cat&include_adult=false&language=en-US
export const fetchFind = async (query) => {
  paramsQuery.set('query', query)
  const response = await axios.get(`${URL}search/movie?${paramsQuery}`);
  return response.data;
};

//запит повної інформації про фільм для сторінки кінофільму
//https://api.themoviedb.org/3/movie/1147292?language=en-US
export const fetchMovie = async (id) => {
  const response = await axios.get(`${URL}movie/${id}?${params}`);
  return response.data;
};

//запит інформації про акторський склад для сторінки кінофільму
//https://api.themoviedb.org/3/movie/1147292/credits?language=en-US
export const fetchCredits = async (id) => {
  const response = await axios.get(`${URL}movie/${id}/credits?${params}`);
  return response.data;
};

//запит оглядів для сторінки кінофільму
//https://api.themoviedb.org/3/movie/424/reviews?language=en-US&page=1
export const fetchReviews = async (id) => {
  const response = await axios.get(`${URL}movie/${id}/reviews?${params}`);
  return response.data;
};
