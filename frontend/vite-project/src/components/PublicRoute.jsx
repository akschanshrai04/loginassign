import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PublicRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                console.log("private ini");
                await axios.get("https://loginassign-4tvv.onrender.com/api/authCheck", { withCredentials: true });
                console.log("Private post");
                setIsAuthenticated(true); // User is authenticated
            } catch {
                setIsAuthenticated(false); // User is not authenticated
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Show a loading spinner while checking
    }

    return (!isAuthenticated) ? children : <Navigate to="/" />;
};

export default PublicRoute;
