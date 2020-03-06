import {MOVIES_LIST, 
        MOVIE_DETAILS} from './type';
import axios from 'axios';

const apikey = '1d7e52e07b0a5958e78e0b936b84ca92';

export const upcomingMovie = () => async dispatch => {
  
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`);
    const movielist = response.data.results;

    dispatch({
        type: MOVIES_LIST, 
        payload: movielist });
}

export const movieDetails = id => async (dispatch, getState) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US&page=1`);
    const moviedetails = response.data;

    dispatch({
        type: MOVIE_DETAILS, 
        payload: moviedetails
    });
}

