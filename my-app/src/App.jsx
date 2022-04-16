
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addcity from './components/forms/Addcity';
import EditCity from './components/forms/EditCity';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-city' element={<Addcity/>}/>
        <Route path='/edit-city/:id' element={<EditCity/>}/>
      </Routes>
    </div>
  );
}

export default App;
