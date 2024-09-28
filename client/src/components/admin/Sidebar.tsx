import { Flex, Divider, List } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import { sidebarData } from "../../assets/admin/adminDashboard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Flex vertical>
      <Flex className="font-semibold text-lg" justify="center" gap={1}>
        <PieChartOutlined />
        <span className="capitalize font-bold ">admin panel</span>
      </Flex>
      <Divider></Divider>
      <List
        size="large"
        dataSource={sidebarData}
        renderItem={(item) => (
          <List.Item
            onClick={() => {
              navigate(item.path);
            }}
            className={`${pathname === item.path && "bg-[#FFBE00]"} 
            
             text-lg cursor-pointer capitalize rounded-md`}
          >
            <span>{item.name}</span>
            <item.icon />
          </List.Item>
        )}
      />
    </Flex>
  );
}
