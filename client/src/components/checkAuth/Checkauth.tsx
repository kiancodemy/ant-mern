import { useAppSelector } from "../../hooks/reduxHook";

import { RootState } from "../../store/store";

import { Navigate } from "react-router-dom";

export default function Checkauth() {
  const { username } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );

  if (!username) {
    return <Navigate replace to="/auth/login"></Navigate>;
  } else {
    return <Navigate replace to="/shop/listing"></Navigate>;
  }
}
