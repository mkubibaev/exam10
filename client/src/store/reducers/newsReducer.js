import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_NEWS_SUCCESS} from "../action/actionTypes";

const initialState = {
    items: [],
    error: null,
    loading: true
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                items: action.news,
                loading: false,
            };

        default:
            return state;
    }
};

export default newsReducer;
