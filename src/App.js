import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import {Resourse, Information, Promo, About, Form} from './components/pages';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Information/>
      <Promo/>
      <About/>
      <Resourse/>
      
      
      
      <Form/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
