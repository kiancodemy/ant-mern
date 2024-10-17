import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";

import { RootState } from "../../store/store";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Checkauth() {
  const location = useLocation();
  console.log(1);

  const { username, role } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );

  /*if (!username) {
    return <Navigate to="/auth/login"></Navigate>;
  } else if (username && location.pathname.includes("login")) {
    return <Navigate to="/shop/home"></Navigate>;
  } else if (username && location.pathname.includes("signup")) {
    return <Navigate to="/shop/home"></Navigate>;
  } else if (
    username &&
    role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/shop/home"></Navigate>;
  } else if (
    username &&
    role === "admin" &&
    !location.pathname.includes("admin")
  ) {
    return <Navigate to="/admin/Dashboard"></Navigate>;
  } else {
    
  }*/
  if (!username) {
    return <Navigate replace to="/auth/login"></Navigate>;
  } else {
    return <Navigate replace to="/shop/listing"></Navigate>;
  }
}
