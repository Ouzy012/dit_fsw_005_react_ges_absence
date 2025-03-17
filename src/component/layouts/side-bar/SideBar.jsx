import { NavLink } from "react-router-dom";
import { getSession } from "../../../utils/session";

const SideBar = () => {
  
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Ges Absence</div>
      </NavLink>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Charts --> */}
      {getSession().user.profils === "ENSEIGNANT" ? (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Mes classes</span>
            </NavLink>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Mes Absences</span>
          </NavLink>
        </li>
      )}

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default SideBar;
