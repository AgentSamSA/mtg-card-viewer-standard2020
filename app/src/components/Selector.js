import { Link } from "react-router-dom";

import styled from "styled-components";

const Selector = () => {
    return (
        <div className="container">
            <StyledLink to="/sets/znr">
                <img src="https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg?1607317200/" alt="Zendikar logo" />
                <p className="link">Zendikar Rising</p>
                </StyledLink>
            <StyledLink to="/sets/m21">
                <img src="https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg?1607317200" alt="Core 2021 logo" />
                    <p className="link">Core 2021</p>
                </StyledLink>
            <StyledLink to="/sets/iko">
                <img src="https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg?1607317200" alt="Ikoria logo" />
                    <p className="link">Ikoria: Lair of Behemoths</p>
                </StyledLink>
            <StyledLink to="/sets/thb">
                <img src="https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg?1607317200" alt="Theros logo" />
                    <p className="link">Theros Beyond Death</p>
                </StyledLink>
            <StyledLink to="/sets/eld">
                <img src="https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg?1607317200" alt="Eldraine logo" />
                    <p className="link">Throne of Eldraine</p>
                </StyledLink>
        </div>
    )
}

export default Selector;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    
    &:visited {
        text-decoration: none;
    }
`;