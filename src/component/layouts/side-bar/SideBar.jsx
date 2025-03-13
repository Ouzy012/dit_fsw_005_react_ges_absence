import { a } from "react-router-dom"

const SideBar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Ges Absence</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>


            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <a className="nav-link" to="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Mes classes</span></a>
            </li>

            
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

        </ul>
    )
}

export default SideBar