import { FETCH_START, FETCH_SET, FET_CARDS_FROM_SET, FETCH_COLOR, FETCH_FAIL } from "../actions/index";

export const initialState = {
    set: "",
    cards: [],
    color: "",
    isFetching: false,
    error: ""
}

export const rootReducer = (state, action) => {
    switch(action.type) {
        case(FETCH_START):
        return({
            ...state,
            isFetching: true,
            error: ""
        })
        default:
            return state;
    }
}