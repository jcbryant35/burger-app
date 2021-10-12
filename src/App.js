import React from 'react';

/*App Components
*******************************************************/
import Home from './components/home_page/Home';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Locations from './components/locations/Locations';

function App() {
  return (
    <div>
      <Home />
      <Menu />
      <Gallery />
      <About />
      <Locations />
    </div>
  )
};

export default App;
