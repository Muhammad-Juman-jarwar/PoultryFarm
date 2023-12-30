import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "Users",
    label: "Users",
    path: "/users",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "Employees",
    label: "Employees",
    path: "/employees",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "Customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "Shades",
    label: "Shades",
    path: "/shades",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "Products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "Departments",
    label: "Departments",
    path: "/departments",
    icon: <HiOutlineCube />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "Sales",
    label: "Sales",
    path: "/sales",
    icon: <HiOutlineCog />,
  },
  {
    key: "Purchase",
    label: "Purchase",
    path: "/purchase",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
