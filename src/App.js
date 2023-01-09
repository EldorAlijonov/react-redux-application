import { Routes, Route } from "react-router-dom";
import { Main, Login, Register } from "./components";
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Routes>\
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;