import React from "react";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import Siparis from "./component/Siparis";
import Giris from "./component/Giris";
import Form from "./component/Form";

const App = () => {
  return (
    <div className="App">
      <div className="ortak">
        <h1> Teknolojik Yemekler</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" />
            </li>
            <li>
              <Link to="/pizza" />
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Giris}></Route>
        <Route path="/pizza" component={Form}></Route>
        <Route path="/siparis" component={Siparis}></Route>
      </Switch>
    </div>
  );
};
export default App;
