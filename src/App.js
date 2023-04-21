import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarjr from "./componte/Nav"
import Second from "./componte/Second";
import Footer from "./componte/Footer";

function App() {
  return (
    <div className="App">
      <div>
      <Navbarjr/>
      </div>
      
      <div>
      <Second/>
      </div>
      <br></br>
      <Footer/>
      </div>
  );
}

export default App;
