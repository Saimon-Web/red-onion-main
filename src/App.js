import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Home/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Breakfast from './Components/Breakfast/Breakfast';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='home/breakfast' element={<Breakfast></Breakfast>}></Route>

      </Routes>

    </div >
  );
}

export default App;
