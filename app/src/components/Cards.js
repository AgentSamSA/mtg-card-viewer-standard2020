import React, { useEffect } from "react";
import {connect} from "react-redux";

import { getSet } from "../actions/index";

const Cards = ({set, color, isFetching, error, cards, getSet}) => {
    useEffect(() => {
    }, []);

    if (error) {
        return <h2>There was an error processing the request: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching info from Scryfall...</h2>
    }

    const handleClick = (set) => {
        getSet(set);
    }

    return (
        <div className="container">
            {
                
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Cards);