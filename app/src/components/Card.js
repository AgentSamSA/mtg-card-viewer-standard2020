import { connect } from "react-redux";

import { WEBSITE_URL } from "../constants";

const Card = (props) => {
    return (
        <div>
            <a href={`${WEBSITE_URL}/card/${props.set}/${props.card.collector_number}`} target="_blank">
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