import "./App.css";
import NavBar from "./component/layouts/nav-bar/NavBar";
import SideBar from "./component/layouts/side-bar/SideBar";
import Home from "./pages/home/Home";
import "./css/sb-admin-2.min.css";
import "./asset/vendor/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div id="wrapper">
      {/* Sidebar here */}
      <SideBar/>
      {/* End SideBar */}

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          {/* NavBar here */}
          <NavBar/>
          {/* End Navbar */}

          {/* Content page */}
          <div className="container-fluid">
                <Home/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
