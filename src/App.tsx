import './App.css';
import Search from './search-player/Search';
import { Route, Routes } from 'react-router-dom';
import Player from './player-profile/Player';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/players/:accountId" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
