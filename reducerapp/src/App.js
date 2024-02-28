import './App.css';
import Contact from './components/Contact'
import Homepage from './components/Homepage';
import {Routes,Route,Link} from "react-router-dom";

function App() {
  
  return(
    <div>
      <nav>
        <Link to = "/" className='nav-item'>Homepage</Link>
        <Link to = "/contact" className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>

    )
}

export default App;
