import React, { Component } from 'react';
import './App.css';
import FirstBar from './Components/firstBar'
import Navbar from './Components/navbar'
import Header from './Components/header'
import Offers from './Components/offers'
import OffersHotel from './Components/offers-hotel'
import Choosen from './Components/ourchoosen'
import TheMap from './Components/map'
import Footer from './Components/footer'

class App extends Component{
  render(){
     return (
      <div className="App">
        <FirstBar/>
        <Navbar/>
        <Header/>
        <Offers/>
        <OffersHotel/>
        <Choosen/>
        <TheMap/>
        <Footer/>
      </div>
    );
  }
}

export default App;
