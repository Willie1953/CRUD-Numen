import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perritos from "./components/Perritos";
import EditarPerro from "./components/EditarPerro";
import AgregarPerro from "./components/AgregarPerro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
       <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Perritos />}></Route>
          <Route path="/agregarperro" element={<AgregarPerro />}></Route>
          <Route path="/editarperro" element={<EditarPerro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
