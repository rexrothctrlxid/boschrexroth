import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Modbus from './pages/Modbus/Modbus';


const App = () => {
  return (      
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/boschrexroth' element={<Home />} />
        <Route path='/modbus' element={<Modbus />} />
      </Routes>
    </Router>
  );
}

export default App;
