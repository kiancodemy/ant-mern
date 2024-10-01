import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function ShoppingComp() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
