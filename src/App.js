import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from "./component/Anasayfa";
import Pizza from "./component/Pizza";
import Success from "./component/Success";
import Footer from "./component/Footer";

const App = () => {
  const [siparisler, setSiparisler] = useState([]);

  const handleSiparisEkle = (siparis) => {
    setSiparisler([...siparisler, siparis]);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
            <Footer />
          </Route>
          <Route path="/pizza">
            <Pizza addSiparis={handleSiparisEkle} />
            <Footer />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          
        </Switch>
       
      </Router>
    </>
  );
};
export default App;