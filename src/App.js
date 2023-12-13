import React from 'react';
import GlassNavbar from './components/Navbar/GlassNavBar.jsx';
import About from './About.jsx';



const App = () => {
  return (
    <div>
      <GlassNavbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
export default App; 