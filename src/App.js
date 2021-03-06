import './App.scss';
import React from 'react';
import Navbar from './pagejs/navbar';
import Landing from './pagejs/landing';
import Jobs from './pagejs/jobs';
import Skills from './pagejs/skills.js';
import Library from './pagejs/library.js'
import Bahasa from './pagejs/bahasa.js';
import Workbench from './pagejs/workbench.js';
import Project from './pagejs/project.js';
import Slider from './pagejs/slider.js'

class App extends React.Component {
  render() {
    return (

      <section className='Landing-Page'>
        <Navbar />
        <Landing />
        <Jobs />
        <Skills />
        <Library />
        <Bahasa />
        <Workbench />
        <Project />
        <Slider />
      </section>

    )
  }
}

export default App;
