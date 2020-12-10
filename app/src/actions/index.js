import axios from "axios";
import { BASE_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_SET = "FETCH_SET";
export const FETCH_CARDS_FROM_SET = "FETCH_CARDS_FROM_SET";
export const FETCH_COLOR = "FETCH_COLOR";
export const FETCH_CARDS_BY_COLOR = "FETCH_CARDS_BY_COLOR";
export const FETCH_FAIL = "FETCH_FAIL";

export const getSetCode = (set) => {
    return ({ type: FETCH_SET, payload: set });
}

export const getSetCards = (set) => dispatch => {
    dispatch({ type: FETCH_START });

    // const allCards = [];

    axios
        .get(BASE_URL + "cards/search?order=set&q=e%3A" + set + "&unique=prints")
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_CARDS_FROM_SET, payload: res.data.data });

            // let loopNum = 1;

            // while (loopNum < 4) {
            //     loopNum++;
            //     axios.get(`https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=set&page=${loopNum}&q=e%3Aznr&unique=prints`).then(res => {
            //         dispatch({ type: FETCH_CARDS_FROM_SET, payload: allCards.push(res.data.data) });
            //     }).catch(err => {
            //         console.log(err);
            //         dispatch({ type: FETCH_FAIL, payload: err.response.message });
            //     });
            // }
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        });
}

export const getColor = (color) => {
    return ({ type: FETCH_COLOR, payload: color });
}

export const getCardsByColor = (set, color) => dispatch => {
    dispatch({ type: FETCH_START });

    axios
        .get(BASE_URL + "cards/search?&order=name&q=color%3D" + color + "+set%3A" + set)
        .then(res => {
            dispatch({ type: FETCH_COLOR, payload: res.data.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: err });
        });
}