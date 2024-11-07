
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleDark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode is enabled", "success")
      document.title = "TextUtils - Dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
      document.title = "TextUtils - Light mode"
    }
  }


  return (
    <>
    <Router>
      <Navbar title="My website" about="About Us" mode={mode} toggleDark={toggleDark} />
      <Alert alert={alert} />
      
        <div className="container">
          <Routes>
          <Route path="/about" element={<About  mode={mode} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word counter,Uppercase,Lowercase,Clear Text" mode={mode} />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
