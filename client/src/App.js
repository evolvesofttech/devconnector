import React, { Component } from 'react';

//Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Landing />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;