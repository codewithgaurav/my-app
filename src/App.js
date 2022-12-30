import { useState } from "react";
import "./App.css";
import About from "./My components/About";
import Navbar from "./My components/Navbar";
import TextForm from "./My components/TextForm";
import Alert from "./My components/Alert";

function App() {
  const [mode, setMode] = useState('light');/*whether dark mode is disabled*/ 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200)
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#090a0b"; 
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert= {alert}/>
      <div className="container my-3" >
      <TextForm showAlert = {showAlert} heading = "Enter your text to Analyze" mode = {mode}/>
      <About/>
      </div>
    </>
  );
}

export default App;
