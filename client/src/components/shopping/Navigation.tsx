import { Shopcategories } from "../../assets/admin/adminDashboard";
import { CategoryType } from "../../types/user";
import { Flex } from "antd";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <Flex className="md:flex-row flex-col" wrap gap="large">
        {Shopcategories.map((item: CategoryType) => {
          return (
            <Link className="text-lg font-semibold" key={item.value} to="/">
              {item.label}
            </Link>
          );
        })}
      </Flex>
    </div>
  );
}
