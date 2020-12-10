import { connect } from "react-redux";

const Card = (props) => {
    return (
        <div>
            <img src={props.card.image_uris.normal} alt={props.card.name} />
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