import {Routes, Route} from "react-router-dom";
import './App.css';
import Players from "./Components/AllPlayers";
import NavBar from "./Components/NavBar";
import singlePlayer from "./Components/SinglePlayer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/players" element={<Players />}/>
        <Route path="/players/playerId" element={<singlePlayer />}/>
      </Routes>
    </div>
  )
}

export default App;
