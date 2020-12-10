import { connect } from "react-redux";

const Card = (props) => {
    return (
        <div>
            <a href={props.card.scryfall_uri} target="_blank" rel="noreferrer">
                {props.card.image_uris ?
                    <img src={props.card.image_uris.small} alt={props.card.name} />
                    : <img src="" alt="insert card art" />
                }
                <p>{props.card.name}</p>
            </a>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        set: state.set,
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Card);