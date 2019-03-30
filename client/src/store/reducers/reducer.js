import {
    FETCH_COMMENTS_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_NEWS_ITEM_SUCCESS,
    FETCH_NEWS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    newsList: [],
    newsItem: {},
    comments: [],
    error: null,
    loading: true
};

const reducer = (state = initialState, action) => {
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
                newsList: action.newsList,
                loading: false,
            };

        case FETCH_NEWS_ITEM_SUCCESS:
            return {
                ...state,
                newsItem: action.newsItem,
                loading: false,
            };

        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.comments,
                loading: false,
            };

        default:
            return state;
    }
};

export default reducer;
