import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { RootState } from "../store/store";
import { fetchauth } from "../store/slices/authslice";
export default function UserAccount() {
  const dispatch = useAppDispatch();
  const { username, email } = useAppSelector(
    (state: RootState) => state.persistedReducer.auth.userinfo
  );
  return (
    <div>
      <h1 onClick={() => dispatch(fetchauth())}>{username}</h1>
      <h1> {email}</h1>
    </div>
  );
}
