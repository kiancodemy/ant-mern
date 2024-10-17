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

  const { username } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
  if (username) {
    return <Navigate replace to={finalUrl}></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}
