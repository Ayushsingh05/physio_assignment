import { Navigate, Outlet} from "react-router-dom";


export const PrivateRoute = () => {
    const isAuthenticate = localStorage.getItem("token");
  if (!isAuthenticate) {
   return <Navigate to={"/login"} />
  }
else{
return <Outlet/>
}

};