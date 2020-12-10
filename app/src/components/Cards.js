import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "./Card";

import { setColor } from "../actions/index";

import { COLOR_ARRAY } from "../constants";

const Cards = (props) => {
    useEffect(() => {
    }, []);

    if (props.error) {
        return <h2>There was an error processing the request: {props.error}</h2>
    }

    if (props.isFetching) {
        return <h2>Fetching info from Scryfall...</h2>
    }

    const handleClick = (color) => {
        setColor(color);
    }

    return (
        <div className="container colors">
            {
                COLOR_ARRAY.map(color =>
                    <button onClick={() => handleClick(color)} key={color}>{color}</button>)
            }
            <div>
                {
                    props.cards.map(card => <Card card={card} key={card.id} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        color: state.color,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { setColor })(Cards);