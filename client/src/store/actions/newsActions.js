import axios from '../../axios-api';
import {
    ADD_DATA_FAILURE,
    ADD_DATA_REQUEST,
    ADD_NEWS_ITEM_SUCCESS, DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_NEWS_ITEM_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_NEWS_ITEM_SUCCESS,
    FETCH_NEWS_SUCCESS
} from "./actionTypes";


export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});
export const addDataRequest = () => ({type: ADD_DATA_REQUEST});
export const addDataFailure = error => ({type: ADD_DATA_FAILURE, error});
export const deleteDataRequest = () => ({type: DELETE_DATA_REQUEST});
export const deleteDataFailure = error => ({type: DELETE_DATA_FAILURE, error});

export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});
export const fetchNewsItemSuccess = newsItem => ({type: FETCH_NEWS_ITEM_SUCCESS, newsItem});
export const addNewsItemSuccess = () => ({type: ADD_NEWS_ITEM_SUCCESS});
export const deleteNewsItemSuccess = () => ({type: DELETE_NEWS_ITEM_SUCCESS});

export const fetchNews = () => {
    return dispatch => {
        dispatch(fetchDataRequest());

        axios.get('/news').then(
            response => dispatch(fetchNewsSuccess(response.data)),
            error => dispatch(fetchDataFailure(error))
        );
    }
};

export const fetchNewsItem = id => {
    return dispatch => {
        dispatch(fetchDataRequest());

        axios.get(`/news/${id}`).then(
            response => dispatch(fetchNewsItemSuccess(response.data)),
            error => dispatch(fetchDataFailure(error))
        );
    }
};

export const addNewsItem = (newsItem, history) => {
    return dispatch => {
        dispatch(addDataRequest());

        axios.post('/news', newsItem).then(
            () => {
                dispatch(addNewsItemSuccess());
                history.push('/');
            },
            error => dispatch(addDataFailure(error)),
        );
    }
};

export const deleteNewsItem = id => {
    return dispatch => {
        dispatch(deleteDataRequest());

        return axios.delete(`news/${id}`).then(
            () => dispatch(deleteNewsItemSuccess()),
            error => dispatch(deleteDataFailure(error)),
        );
    }
};
