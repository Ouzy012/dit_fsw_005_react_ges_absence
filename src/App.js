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

function App() {
  
  return (
    <div id="wrapper">
      <BrowserRouter>
        {/* Sidebar here */}
        <SideBar />
        {/* End SideBar */}

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* NavBar here */}
            <NavBar />
            {/* End Navbar */}

            {/* Content page */}
            <div className="container-fluid">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/liste-etudiant/:idClasse"
                  element={<Etudiant />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
