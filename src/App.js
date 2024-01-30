import Sign from './Login/Sign';
import './components/style.css';
import Home from './components/home';
import Fruits from './components/Fruits';
 import Vegetable from './components/Vegetables';
 import CheckOut from './components/CheckOut'
 import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Login1 from './Login/login1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>


<Route exact path='/' element={< Login1 />}></Route>
<Route exact path='/signup' element={< Sign />}></Route>
 <Route exact path='/home' element={< Home />}></Route>
<Route exact path='/fruits' element={< Fruits />}></Route>
<Route exact path='/checkOut' element={< CheckOut />}></Route> 
<Route exact path='/vegetable' element={< Vegetable />}></Route> 
<Route exact path='/footer' element={< Footer />}></Route>
<Route exact path='/contact' element={< ContactUs />}></Route>  








</Routes>
    </div>
    </Router>
  );
}

export default App;
