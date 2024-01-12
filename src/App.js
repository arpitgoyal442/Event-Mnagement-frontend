import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";

import "./global.css"
import Event from "./pages/event/event";
import CreateEvent from "./pages/createevent/createevent";



function App() {
  return (

    
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/event/create" element={<CreateEvent/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
