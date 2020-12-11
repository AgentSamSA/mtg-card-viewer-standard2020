import { connect } from "react-redux";

const Card = (props) => {
    return (
        <>
            <a href={props.card.scryfall_uri} target="_blank" rel="noreferrer">
                {props.card.card_faces ?
                    props.card.card_faces.map(card_face => {
                        return (
                            <>
                                <img src={card_face.image_uris.normal} alt={card_face.name} />
                                <p>{card_face.name}</p>
                            </>)
                    })
                    :
                    <>
                        <img src={props.card.image_uris.normal} alt={props.card.name} />
                        <p>{props.card.name}</p>
                    </>
                }
            </a>
        </>
    )
}

const mapStateToProps = state => {
    return {
        set: state.set,
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Card);