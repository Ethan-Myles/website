import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectionBar from './components/GlobalUI/selectionBar.js';
import Theme from './components/GlobalUI/Theme.js';
import EthanMyles from './components/EthanMyles/EthanMyles.js';
import Projects from './components/Projects/Projects.js';
import University from './components/University/University.js';
import Contact from './components/Contact/Contact.js';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
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
          <Route path="/university" element={<University/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/additional-info" element={<AdditionalInfo/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
