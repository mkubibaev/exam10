import axios from '../../axios-api';
import {
    ADD_COMMENT_SUCCESS,
    ADD_DATA_FAILURE,
    ADD_DATA_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_DATA_FAILURE,
    DELETE_DATA_REQUEST, FETCH_COMMENTS_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
} from "./actionTypes";

export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});
export const addDataRequest = () => ({type: ADD_DATA_REQUEST});
export const addDataFailure = error => ({type: ADD_DATA_FAILURE, error});
export const deleteDataRequest = () => ({type: DELETE_DATA_REQUEST});
export const deleteDataFailure = error => ({type: DELETE_DATA_FAILURE, error});

export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const addCommentSuccess = () => ({type: ADD_COMMENT_SUCCESS});
export const deleteCommentSuccess = () => ({type: DELETE_COMMENT_SUCCESS});

export const fetchComments = newsId => {
    return dispatch => {
        dispatch(fetchDataRequest());

        if (newsId) {
            axios.get(`/comments?news_id=${newsId}`).then(
                response => dispatch(fetchCommentsSuccess(response.data)),
                error => dispatch(fetchDataFailure(error))
            );
        } else {
            axios.get('/comments').then(
                response => dispatch(fetchCommentsSuccess(response.data)),
                error => dispatch(fetchDataFailure(error))
            );
        }
    }
};

export const addComment = comment => {
    return dispatch => {
        dispatch(addDataRequest());

        return axios.post('/comments', comment).then(
            () => dispatch(addCommentSuccess()),
            error => dispatch(addDataFailure(error)),
        );
    }
};

export const deleteComment = id => {
    return dispatch => {
        dispatch(deleteDataRequest());

        return axios.delete(`comments/${id}`).then(
            () => dispatch(deleteCommentSuccess()),
            error => dispatch(deleteDataFailure(error)),
        );
    }
};
