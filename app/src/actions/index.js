import axios from "axios";
import { BASE_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const SET_SET_CODE = "SET_SET_CODE";
export const FETCH_CARDS_FROM_SET = "FETCH_CARDS_FROM_SET";
export const SET_COLOR = "SET_COLOR";
export const FETCH_CARDS_BY_COLOR = "FETCH_CARDS_BY_COLOR";
export const FETCH_FAIL = "FETCH_FAIL";

export const setSetCode = (setCode) => {
    return ({ type: SET_SET_CODE, payload: setCode });
}

export const getSetCards = (set) => dispatch => {
    dispatch({ type: FETCH_START });

    function handlePageData(data) {
        return res => {
            if (res.data.next_page) {
                axios.get(res.data.next_page)
                    .then(handlePageData(data.concat(res.data.data)))
                    .catch(err => dispatch({ type: FETCH_FAIL, payload: err }));
            } else {
                console.log(data.concat(res.data.data));
                dispatch({ type: FETCH_CARDS_FROM_SET, payload: data.concat(res.data.data) });
            }
        }
    }

    axios
        .get(`${BASE_URL}/cards/search?order=set&q=e%3A${set}&unique=prints`)
        .then(handlePageData([]))
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_FAIL, payload: err })
        });
}

export const setColor = (color) => {
    return ({ type: SET_COLOR, payload: color });
}

export const getCardsByColor = (set, color) => dispatch => {
    dispatch({ type: FETCH_START });

    axios
        .get(`${BASE_URL}/cards/search?&order=name&q=color%3D${color}+set%3A${set}`)
        .then(res => {
            dispatch({ type: FETCH_CARDS_BY_COLOR, payload: res.data.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: err });
        });
}