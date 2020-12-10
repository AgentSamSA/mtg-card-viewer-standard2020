import { Link } from "react-router-dom";

import { connect } from "react-redux";

import styled from "styled-components";
import { setSetCode, getSetCards } from "../actions/index";

import { IMAGE_URL } from "../constants";

const Selector = (props) => {

    const handleClick = (setCode) => {
        props.setSetCode(setCode);
        props.getSetCards(setCode);
    }

    return (
        <div className="container">
            <StyledLink to="/znr" onClick={() => handleClick("znr")}>
                <p className="link">Zendikar Rising</p>
                <img src={`${IMAGE_URL}/znr.svg?1607317200/`} alt="Zendikar logo" />
            </StyledLink>
            <StyledLink to="/m21"  onClick={() => handleClick("m21")}>
                <p className="link">Core 2021</p>
                <img src={`${IMAGE_URL}/m21.svg?1607317200/`} alt="Core 2021 logo" />

            </StyledLink>
            <StyledLink to="/iko"  onClick={() => handleClick("iko")}>
                <p className="link">Ikoria: Lair of Behemoths</p>
                <img src={`${IMAGE_URL}/iko.svg?1607317200/`} alt="Ikoria logo" />

            </StyledLink>
            <StyledLink to="/thb"  onClick={() => handleClick("thb")}>
                <p className="link">Theros Beyond Death</p>
                <img src={`${IMAGE_URL}/thb.svg?1607317200/`} alt="Theros logo" />

            </StyledLink>
            <StyledLink to="/eld"  onClick={() => handleClick("eld")}>
                <p className="link">Throne of Eldraine</p>
                <img src={`${IMAGE_URL}/eld.svg?1607317200/`} alt="Eldraine logo" />

            </StyledLink>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        set: state.set,
        cards: state.cards,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { setSetCode, getSetCards })(Selector);

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    width: 15%;
    
    &:visited {
        text-decoration: none;
    }
`;