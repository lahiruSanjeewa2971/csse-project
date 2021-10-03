import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'


import Pages from './Components/Pages'

import { DataProvider } from './GlobalState'
import Header from './Components/Headers/Header'


function App() {
 
 
  return (
    <DataProvider>
      <Router>
      <div className="App">
          
              <Header/>
              <Pages/>
              
        </div>
      </Router>
    </DataProvider>
  );
} 
       
export default App;
