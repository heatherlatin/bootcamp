import React from "react";
import Nav from "./components/Nav.jsx";
import Splash from "./components/Splash.jsx";
import InfoPanel from "./components/InfoPanel.jsx";

function App() {
  return (
  <React.Fragment>
    <Nav />
    <Splash />
    <InfoPanel />
  </React.Fragment>
  );
}

export default App;
