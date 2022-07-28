import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
