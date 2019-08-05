import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Routes from './routes/routes'

import './App.css';
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="appMainDiv">
          <Header />
        <div className="appRoutes">
          <Routes />
        </div>
        <div className="appFooter">
          <Footer />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
