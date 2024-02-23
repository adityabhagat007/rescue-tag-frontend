import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_CONSTANTS } from "../constants/constant"
import { getLocalStorageItem } from "../services/localStorageService"





const UsePrivateRoute = ()=>{
    const authToken = getLocalStorageItem(LOCAL_STORAGE_CONSTANTS.authToken);
    return (authToken ? <Outlet/> :<Navigate to="/login"/>)
}


export default UsePrivateRoute;