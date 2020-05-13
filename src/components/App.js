import React from "react";
import Nav from "./Common/Nav";
import Footer from "./Common/Footer";
import ReactGA from "react-ga";

ReactGA.initialize("UA-166282432-1");
ReactGA.pageview("/homepage");

function App() {
  return (
    <main>
      <Nav />
      <Footer />
    </main>
  );
}

export default App;
