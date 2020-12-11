import axios from "axios";
import { BASE_URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const GET_SET = "GET_SET";
export const FETCH_CARDS_FROM_SET = "FETCH_CARDS_FROM_SET";
export const GET_COLOR = "GET_COLOR";
export const FETCH_FAIL = "FETCH_FAIL";

export const getSet = (set) => dispatch => {
    dispatch({ type: GET_SET, payload: set });

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

export const getColor = (color) => {
    return({ type: GET_COLOR, payload: color });
}