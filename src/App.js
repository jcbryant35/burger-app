import React from 'react';

/*App Components
*******************************************************/
import Home from './components/home_page/Home';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Locations from './components/locations/Locations';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Home />
      <Menu />
      <Gallery />
      <About />
      <Locations />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;
