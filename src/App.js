import React from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import darkImageOne from './images/icon.png';
import darkImageTwo from './images/Vector.png';
import imageOne from './images/light-react-icon-1.png';
import imageTwo from './images/light-react-icon-2.png';
function App() {

  const [dark, setDark] = React.useState(false);
  const toggle = () =>{
    setDark((prevMode) =>{
      return prevMode ? false: true
    });
  }
  return (
    <div className="container">
      <Navbar 
        darkMode={dark}
        togglerMode={toggle}
      />
      <Main 
        darkMode={dark}
        image1={dark === false ? imageOne: darkImageOne}
        image2={dark === false ? imageTwo: darkImageTwo}
      />
    </div>
  );
}

export default App;
