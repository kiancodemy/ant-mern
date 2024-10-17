import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHook";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";

export default function CheckoutAuth() {
  const location = useLocation();

  const { username } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
 
  if (!username) {
    return (
      <Navigate
        replace
        to={`/auth/login?redirect=${location.pathname}`}
      ></Navigate>
    );
  } else {
    return <Outlet></Outlet>;
  }
}
