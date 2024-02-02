import { Routes, Route } from "react-router-dom";
import Lobby from "../screens/Lobby";
import RoomPage from "../screens/Room";

import './App.css'

function App() {


  return (
    <>
     <Routes>

      <Route path='/lobby' element = {<Lobby />}></Route>
      <Route path="/room/:roomId" element={<RoomPage />} />
     </Routes>
    </>
  )
}

export default App
