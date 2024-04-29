import { HashRouter as Router, Route, Routes, } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Modbus from './pages/Modbus/Modbus';
import Sorting from './pages/Sorting/Sorting';
import HMI from './pages/HMI/hmi'


const App = () => {
  return (      
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path='/modbus' element={<Modbus />} />
        <Route exact path='/sorting' element={<Sorting />} />
        <Route exact path='/hmi' element={<HMI />} />
      </Routes>
    </Router>
  );
}

export default App;
