import { fetchauth } from "../../store/slices/authslice";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { RootState } from "../../store/store";
import { message } from "antd";
export const LogouButton = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useAppDispatch();

  const { username } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
  const handleLogout = () => {
    dispatch(fetchauth());
    messageApi.open({
      type: "success",
      content: "Logout successfully",
      duration: 2,
    });
  };

  return (
    <>
      {contextHolder}
      {username ? (
        <span onClick={handleLogout}>logout</span>
      ) : (
        <Link to="/auth/login">login</Link>
      )}
    </>
  );
};
