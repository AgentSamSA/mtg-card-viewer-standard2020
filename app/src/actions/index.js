import axios from "axios";
import { BASE_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_SET = "FETCH_SET";
export const FETCH_CARDS_FROM_SET = "FETCH_CARDS_FROM_SET";
export const FETCH_COLOR = "FETCH_COLOR";
export const FETCH_FAIL = "FETCH_FAIL";

export const getSet = (set) => dispatch => {
    dispatch({ type: FETCH_START });

    axios
        .get(BASE_URL + "sets/" + set)
        .then(res => {
            dispatch({ type: FETCH_SET, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: err.response.message });
        });
}

export const getCardsFromSet = (set) => dispatch => {
    dispatch({ type: FETCH_START });

    const allCards = [];

    axios
        .get(BASE_URL + "cards/search?order=set&q=e%3A" + set + "&unique=prints")
        .then(res => {
            dispatch({ type: FETCH_CARDS_FROM_SET, payload: [...allCards, res.data] });
        })
        .then(res => {
            while (res.has_more) {
                axios.get(res.next_page).then(res => {
                    dispatch({ type: FETCH_CARDS_FROM_SET, payload: [...allCards, res.data] });
                }).catch(err => {
                    dispatch({ type: FETCH_FAIL, payload: err.response.message });
                });
            }
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: err.response.message })
        });

        return allCards;
}

export const getCardsByColor = (set, color) => dispatch => {
    dispatch({ type: FETCH_START });

    axios
        .get(BASE_URL + "cards/search?&order=name&q=color%3D" + color + "+set%3A" + set)
        .then(res => {
            dispatch({ type: FETCH_COLOR, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: err.response.message });
        });
}