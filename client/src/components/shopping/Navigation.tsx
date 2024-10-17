import { Shopcategories } from "../../assets/admin/adminDashboard";
import { CategoryType } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from "antd";
import { useAppDispatch } from "../../hooks/reduxHook";

import { setcategory } from "../../store/slices/productSlice";
type close = {
  onClose: () => void;
};
export default function Navigation({ onClose }: close) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const NavigateHandler = (label: String) => {
    dispatch(setcategory(label === "Home" ? "" : label.toLowerCase()));
    navigate(`/shop/listing`);
    onClose();
  };
  return (
    <div>
      <Flex className="md:flex-row flex-col" wrap gap="large">
        {Shopcategories.map((item: CategoryType) => {
          return (
            <Button
              onClick={() => NavigateHandler(item.label)}
              className="text-lg font-semibold"
              key={item.value}
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
    </div>
  );
}
