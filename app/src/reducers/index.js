import { FETCH_START, GET_SET, GET_SET_NAME, GET_COLOR, FETCH_FAIL, FETCH_CARDS_FROM_SET } from "../actions/index";

export const initialState = {
    set: "",
    setName: "",
    cards: [],
    color: "",
    sortedCards: [],
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
        case (GET_SET_NAME):
            return ({
                ...state,
                setName: action.payload,
                isFetching: false
            });
        case (FETCH_CARDS_FROM_SET):
            console.log(action.payload);
            return ({
                ...state,
                cards: action.payload,
                sortedCards: action.payload,
                isFetching: false
            });
        case (GET_COLOR):
            console.log(action.payload);
            return ({
                ...state,
                color: action.payload,
                sortedCards: state.cards.filter(card => {
                    if (action.payload !== "C") {
                        return card.colors.includes(action.payload) || card.color_identity.includes(action.payload);
                    } else if (action.payload) {
                        return card.colors.length === 0 || card.color_identity.length === 0;
                    } else {
                        return card;
                    }
                }),
                isFetching: false
            });
        default:
            return state;
    }
}