import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

const PrivateRoute = ({children}) => {

    // Fetching the user from the user context.
    const { user } = useContext(UserContext);
    const redirectLoginUrl = `/login`;

    // If the user is not logged in we are redirecting them
    // to the login page. Otherwise we are letting them to
    // continue to the page as per the URL using <Outlet />.
    return !user ? <Navigate to={redirectLoginUrl} /> : children;
}

export default PrivateRoute;