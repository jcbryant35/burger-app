import React from 'react';

/*App Components
*******************************************************/
import Home from './components/home_page/Home';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Home />
      <Menu />
      <Gallery />
      <About />
    </div>
  )
};

export default App;
