import { connect } from "react-redux";

const Card = (props) => {
    return (
        <div>
            { props.card.image_uris ?
                <img src={props.card.image_uris.small} alt={props.card.name} />
                : <img src="" alt="insert card art"/>
            }
            <p>{props.card.name}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Card);