import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function MainPage() {
  const { category, brand } = useSelector(
    (state: RootState) => state.persistedReducer.productAuth
  );
  return <div>main</div>;
}
