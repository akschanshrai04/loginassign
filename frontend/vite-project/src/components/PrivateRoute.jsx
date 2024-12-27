import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ( { children } ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                console.log("private ini")
                const token = window.localStorage.getItem('jwt');
                console.log("inside checkauth private : " ,token);
                await axios.get("https://loginassign-4tvv.onrender.com/api/authCheck", { 
                    withCredentials: true,
                    headers: {
                        Authorization : `Bearer ${token}`
                    }

                });
                console.log("private post")
                setIsAuthenticated(true); // User is authenticated
            } catch {
                console.log("nahi jaane dunga")
                setIsAuthenticated(false); // User is not authenticated
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Show a loading spinner while checking
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
