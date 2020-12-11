import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

import { getColor } from "../actions/index";

import W from "../assets/White.png";
import G from "../assets/Green.png";
import U from "../assets/Blue.png";
import B from "../assets/Black.png";
import R from "../assets/Red.png";
import C from "../assets/Colorless.png";

const Cards = (props) => {

    if (props.error || !props.cards) {
        return <h3>There was an error processing the request: {props.error}</h3>
    }

    if (props.isFetching) {
        return <h3>Fetching info from Scryfall...</h3>
    }

    const handleClick = (color) => {
        props.getColor(color);
    }

    const clearColor = () => {
        props.getColor("");
    }

    return (
        <div className="container">
            <div className="container colors">
                <img src={W} alt="White" onClick={() => handleClick("W")} key="W" />
                <img src={G} alt="Green" onClick={() => handleClick("G")} key="G" />
                <img src={U} alt="Blue" onClick={() => handleClick("U")} key="U" />
                <img src={B} alt="Black" onClick={() => handleClick("B")} key="B" />
                <img src={R} alt="Red" onClick={() => handleClick("R")} key="R" />
                <img src={C} alt="Colorless" onClick={() => handleClick("C")} key="C" />
            </div>
            <div>
                <h3 onClick={clearColor}>Back to All</h3>
                <h2>{props.setName}</h2>
            </div>
            <div className="container cards">
                {
                    props.sortedCards.map(card => <Card card={card} key={card.id} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        set: state.set,
        setName: state.setName,
        cards: state.cards,
        color: state.color,
        sortedCards: state.sortedCards,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getColor })(Cards);