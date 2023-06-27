
import './App.css';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Popular } from './components/mostPopular';

function App() {
  return (
   <>
   <NavBar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/popular' element={<Popular />} />
      </Routes>
  </>
  );
}

export default App;
