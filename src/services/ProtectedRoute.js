import { Navigate, Outlet, useNavigate } from "react-router-dom";


const ProtectedRoute = ({ isConnected }) => {
    return isConnected ? <Outlet/> : <Navigate to='/' replace/>
};

export default ProtectedRoute;
