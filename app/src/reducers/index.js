import { FETCH_START, SET_SET_CODE, SET_COLOR, FETCH_FAIL, FETCH_CARDS_FROM_SET, FETCH_CARDS_BY_COLOR } from "../actions/index";

export const initialState = {
    set: "",
    cards: [],
    color: "",
    isFetching: false,
    error: ""
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                isFetching: true,
                error: ""
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                error: action.payload,
            });
        case (SET_SET_CODE):
            console.log(action.payload);
            return ({
                ...state,
                set: action.payload,
                isFetching: false
            });
        case (FETCH_CARDS_FROM_SET):
            console.log(action.payload);
            return ({
                ...state,
                cards: action.payload,
                isFetching: false
            });
        case (SET_COLOR):
            console.log(action.payload);
            return ({
                ...state,
                color: action.payload,
                isFetching: false
            });
        case (FETCH_CARDS_BY_COLOR):
            return ({
                ...state, cards: action.payload,
                isFetching: false
            });
        default:
            return state;
    }
}