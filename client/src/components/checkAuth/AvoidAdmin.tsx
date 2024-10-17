import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";
import { Navigate } from "react-router-dom";

import { RootState } from "../../store/store";
export default function AvoidAdmin() {
  const { role } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
  if (role === "admin") {
    return <Navigate replace to="/admin/Dashboard"></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}
