import { FETCH_START, GET_SET, GET_COLOR, FETCH_FAIL, FETCH_CARDS_FROM_SET } from "../actions/index";

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
        case (GET_SET):
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
        case (GET_COLOR):
            console.log(action.payload);
            return ({
                ...state,
                color: action.payload,
                cards: [state.cards.filter(card => {
                    return card.colors.toString() === action.payload || card.color_identity.toString() === action.payload;
                })],
                isFetching: false
            });
        default:
            return state;
    }
}