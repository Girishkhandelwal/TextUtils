import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000); 
} 
 


  const [mode, setmode] = useState("light");
  // const [mode2, setmode2] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been Disable", "success");
    }
  }
  // const togglemode2= () => {
  //   if (mode2 === "light") {
  //     setmode2("dark");
  //     document.body.style.backgroundColor = 'red';
  //     showAlert("Dark mode has been enable", "success");
  //   } 
  //   else {
  //     setmode2("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Dark mode has been Disable", "success");
  //   }
  // }
  return (
    <>
    {/* <Router> */}
    {/* <Navbar title="textuils" about="aboutTextuils" /> */}
    
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}  />  
      {/* mode2={mode2}  */}
      {/* togglemode2={togglemode2} */}
      <Alert alert={alert} />
    
    <div className="container">

      {/* <Routes> */}
            {/* <Route path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route path="/" element={ */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* }> */}
            {/* </Route> */}
      {/* </Routes> */}
    </div>

        {/* <AboutUs/> */}
      {/* </Router> */}
    </>
        
    );
  }
  
  export default App;
        

         




