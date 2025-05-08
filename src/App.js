import React from 'react';
import SelectionBar from './components/selectionBar.js';
import Theme from './components/Theme';
import EmblaCarousel from './components/EmblaCarousel';
import EthanMyles from './components/EthanMyles';
import './styles/embla.css';
import './styles/globals.css';

const OPTIONS = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


function App() {
  return (
    <>
      <SelectionBar/>
      <Theme/>
      <EthanMyles/>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="App">
      </div>
    </>
  );
}

export default App;
