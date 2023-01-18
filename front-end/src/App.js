
import React, { useState, useEffect } from 'react';

import logo from './instacopy.webp';
import camera from './camera-icon.png'
import './App.css';
import Postview from './Components/postview';

import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import LandingPage from './Components/landingpage';
import FormPage  from './Components/form';


function App() {
  //console.log(data.user)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://instaclone-backend-5fzk.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => setData(data.reverse()))
      .catch(error => console.log(error));
  }, []);
  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/user/newpost' element={<div className="App">
      <header className="App-header">
      <Link to='/user' replace>
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        
      </header><FormPage/></div>}></Route>
          <Route path='user' element={<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='newpost'><img src={camera} className="camera-logo" alt="logo" /></Link>
        
      </header>
      <div className='posts'>
      {data.map((details,index)=>{
        return(
          <Postview post={details} key={index}></Postview>
        );
      })}
      </div>
      
    </div>}></Route>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
