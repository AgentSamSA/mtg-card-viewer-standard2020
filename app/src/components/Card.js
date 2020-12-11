import { connect } from "react-redux";

const Card = (props) => {
    return (
        <>
            <a href={props.card.scryfall_uri} target="_blank" rel="noreferrer">
                {props.card.card_faces ?
                    props.card.card_faces.map(card_face => {
                        return (
                            <div key={card_face.illustration_id}>
                                <img src={card_face.image_uris.normal} alt={card_face.name} />
                                <p>{card_face.name}</p>
                            </div>)
                    })
                    :
                    <div>
                        <img src={props.card.image_uris.normal} alt={props.card.name} />
                        <p>{props.card.name}</p>
                    </div>
                }
            </a>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        color: state.color
    }
}

export default connect(mapStateToProps)(Card);