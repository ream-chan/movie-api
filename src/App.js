
import './App.css';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Trending from './components/Trending';
import { Upcoming } from './pages/upComing';
import TopRated from './pages/topRated';
import MovieDetail from './pages/movieDetail';

function App() {
  return (
   <>
     <NavBar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/trending' element={<Trending />} />
         <Route path='/upcoming' element={<Upcoming/>} />
         <Route path='/toprated' element={<TopRated />} />
         <Route path="/popular/:id" element={<MovieDetail />} />
      </Routes>
   <Footer />
  </>
  );
}

export default App;
