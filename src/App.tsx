import './App.css';
import Search from './search-player/Search';
import { Route, Routes } from 'react-router-dom';
import Player from './player-profile/Player';
import NavBar from './nav-bar/NavBar';
import Heroes from './heroes/Heroes';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/players/:accountId" element={<Player />} />
        <Route path="/heroes" element={<Heroes />}/>
      </Routes>
    </>
  );
}
