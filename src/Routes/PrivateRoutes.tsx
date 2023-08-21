import { Navigate, Outlet} from "react-router-dom";


export const PrivateRoute = () => {
    const isAuthenticate = localStorage.getItem("isLoggedIn");
  if (!isAuthenticate) {
   return <Navigate to={"/login"} />
  }
else{
return <Outlet/>
}

};