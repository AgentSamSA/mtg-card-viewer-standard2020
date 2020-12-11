import './App.css';

import { Route, Link, Switch } from "react-router-dom";

import Selector from "./components/Selector";
import Cards from "./components/Cards";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>2020 Standard Sets</h1>
      <Switch>
        <Route exact path="/">
          <Selector />
        </Route>

        <Route path="/:set">
          <Cards />
        </Route>
      </Switch>
      <StyledLink to="/">Back to Sets</StyledLink>
    </div>
  );
}

export default App;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 3%;
  font-size: 1.6rem;

  &:visited {
    text-decoration: none;
  }
`;