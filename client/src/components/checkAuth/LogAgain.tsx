import React from "react";

import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store/store";
export default function LogAgain() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect");
  const finalUrl = redirect || "/shop/listing";

  const { username, role } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
  console.log(role);
  if (username && role === "user") {
    return <Navigate replace to={finalUrl}></Navigate>;
  } else if (username && role === "admin") {
    return <Navigate replace to="/admin/Dashboard"></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}
