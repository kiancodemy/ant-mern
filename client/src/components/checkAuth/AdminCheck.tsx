import React from "react";

import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";

export default function AdminCheck() {
  const { role } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
  if (role !== "admin") {
    return <Navigate replace to="/shop/listing"></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}
