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
  { key: 1, value: "men", label: "Men" },
  { key: 2, value: "women", label: "Women" },
  { key: 3, value: "kids", label: "Kids" },
  { key: 4, value: "accessories", label: "Accessories" },
  { key: 5, value: "footwear", label: "Footwear" },
];
export const Shopcategories = [
  { value: 1, label: "Home", data: "Home" },
  { value: 2, label: "Men", data: "Men" },

  { value: 3, label: "Women", data: "Women" },
  { value: 4, label: "Kids", data: "Kids" },
  { value: 5, label: "Accessories", data: "Accessories" },
  { value: 6, label: "Footwear", data: "Footwear" },
];

export const brand = [
  { key: 1, value: "nike", label: "Nike" },
  { key: 2, value: "adidas", label: "Adidas" },
  { key: 3, value: "puma", label: "Puma" },
  { key: 4, value: "levi", label: "Levi's" },
  { key: 5, value: "zara", label: "Zara" },
  { key: 6, value: "h&m", label: "H&M" },
];
export const sorting = [
  { key: "0", value: "Low to Hight", label: "Low to Hight" },
  { key: "1", value: "High to Low", label: "High to Low" },
];
