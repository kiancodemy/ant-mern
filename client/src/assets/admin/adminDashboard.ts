import {
  DashboardOutlined,
  ShopOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
export const sidebarData = [
  { name: "dashboard", path: "/admin/Dashboard", icon: DashboardOutlined },
  { name: "products", icon: ShopOutlined, path: "/admin/products" },
  { name: "order", icon: CreditCardOutlined, path: "/admin/orders" },
];

export const categories = [
  { value: "men", label: "Men" },
  { value: "women", label: "Women" },
  { value: "kids", label: "Kids" },
  { value: "accessories", label: "Accessories" },
  { value: "footwear", label: "Footwear" },
];

export const brand = [
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "puma", label: "Puma" },
  { value: "levi", label: "Levi's" },
  { value: "zara", label: "Zara" },
  { value: "h&m", label: "H&M" },
];
