import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectRoutes = () => {
  const username = useSelector((state) => state.username)

     if (username.trim().length > 0) {
         return <Outlet/>
     }else{
         return <Navigate to= "/"/>
     }
      
}

export default ProtectRoutes;