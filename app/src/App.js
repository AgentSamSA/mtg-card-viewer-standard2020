import './App.css';

import { Route, Link, Switch } from "react-router-dom";

import Selector from "./components/Selector";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      2020 Standard Sets
      <Switch>
        <Route exact path="/">
          <Selector />
        </Route>

        <Route path="/sets/:set">
          <Cards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
