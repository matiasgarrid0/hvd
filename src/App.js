import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom'
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Pickles } from "./components/Products/Pickles/Pickles";
import { WhatsappIcon } from './components/Footer/WhatsappIcon';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/pickles" element={<Pickles />} />
      </Routes>
      <WhatsappIcon />
      <Footer />
    </div>
  );
}

export default App;
