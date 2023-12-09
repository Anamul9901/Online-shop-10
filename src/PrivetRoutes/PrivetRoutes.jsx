/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="text-center mt-32">
            <span className="loading loading-spinner text-warning"></span>
        </div>
    }
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/signin'></Navigate>
    );
};

export default PrivetRoutes;