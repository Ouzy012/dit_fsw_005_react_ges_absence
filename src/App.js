import "./App.css";
import NavBar from "./component/layouts/nav-bar/NavBar";
import SideBar from "./component/layouts/side-bar/SideBar";
import Home from "./pages/home/Home";
import "./css/sb-admin-2.min.css";
import "./asset/vendor/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Etudiant from "./pages/etudiant/Etudiant";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";
import { getSession, removeSession } from "./utils/session";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    removeSession();
    getSession() !== null ? setIsConnected(true) : setIsConnected(false);

    console.log(isConnected);
  }, []);

  return (
    <div id="wrapper">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isConnected={isConnected} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/liste-etudiant/:idClasse" element={<Etudiant />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
