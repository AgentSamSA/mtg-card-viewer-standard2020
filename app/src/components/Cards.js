import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "./Card";

import { getCardsByColor, setColor } from "../actions/index";

import White from "../assets/White.png";
import Green from "../assets/Green.png";
import Blue from "../assets/Blue.png";
import Black from "../assets/Black.png";
import Red from "../assets/Red.png";
import Colorless from "../assets/Colorless.png";

const Cards = (props) => {
    useEffect(() => {
    }, []);

    if (props.error) {
        return <h2>There was an error processing the request: {props.error}</h2>
    }

    if (props.isFetching) {
        return <h2>Fetching info from Scryfall...</h2>
    }

    const handleClick = (color, set) => {
        setColor(color);
        getCardsByColor(color, set);
    }

    return (
        <>
            <div className="container colors">
                <img src={White} alt="White" onClick={() => handleClick("White", props.set)} key="White" />
                <img src={Green} alt="Green" onClick={() => handleClick("Green", props.set)} key="Green" />
                <img src={Blue} alt="Blue" onClick={() => handleClick("Blue", props.set)} key="Blue" />
                <img src={Black} alt="Black" onClick={() => handleClick("Black", props.set)} key="Black" />
                <img src={Red} alt="Red" onClick={() => handleClick("Red", props.set)} key="Red" />
                <img src={Colorless} alt="Colorless" onClick={() => handleClick("Colorless", props.set)} key="Colorless" />
            </div>
            <div className="container cards">
                {
                    props.cards.map(card => <Card card={card} key={card.id} />)
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        set: state.set,
        cards: state.cards,
        color: state.color,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { setColor })(Cards);