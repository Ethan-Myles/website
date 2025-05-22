import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectionBar from './components/selectionBar.js';
import Theme from './components/Theme.js';
import EthanMyles from './components/EthanMyles/EthanMyles.js';
import Projects from './components/Projects';
import PageNotFound from './components/PageNotFound';
import './styles/embla.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <SelectionBar/>
      <Theme/>
        <Routes>
          <Route path="/" element={<EthanMyles/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
