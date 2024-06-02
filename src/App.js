import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import About from './component/About';
import Alert from './component/Alert';
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    //alert box will desable after  1.5 sec
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert("Its an dark mode", "success");
      document.title = 'TextUtils - Dark Mode';
      /* setInterval=(()=>{
         document.title = 'Text util is amazing';
       },2000);
       setInterval=(()=>{
         document.title = 'Install Text-Utils now';
       },1500);*/
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Its an light mode", "success");
      document.title = 'TextUtils - light Mode';
    }
  }

  return (
    <BrowserRouter>
      <main>

        {/*<Navbar title="prikansi" aboutText="aboutText"/>*/}
        {/*<Navbar>*/}
        
          <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
          <Alert alert={alert} />
          
          
          <div className="container my-3">
          <Routes>
            <Route path="about" element={<About />}/>
            
            <Route path="/" element={<TextForm showalert={showalert} heading="Enter the to analyze" mode={mode} />}/>
              
           
            </Routes>
          </div>
        
      </main>
    </BrowserRouter>

  );
}

export default App;
