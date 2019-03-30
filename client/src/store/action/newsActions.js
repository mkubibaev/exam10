import axios from '../../axios-api';
import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_NEWS_SUCCESS} from "./actionTypes";


export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});
export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});

export const fetchNews = () => {
    return dispatch => {
        dispatch(fetchDataRequest());

        axios.get('/news').then(
            response => dispatch(fetchNewsSuccess(response.data)),
            error => dispatch(fetchDataFailure(error))
        );
    }
};
