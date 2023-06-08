
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { CardsDetails } from './components/CardsDetails';
import { Cards } from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Home from './component2/Home';
import Login from './component2/Login';
import Details from './component2/Details';


function App() {
  return (
    <div className="App">
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/cpage' element={<Cards/>}/>
      <Route path='/cart/:id' element={<CardsDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;