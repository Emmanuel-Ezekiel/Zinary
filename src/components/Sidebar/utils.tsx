import {
  Dashboard,
  Wallet,
  Loan,
  User,
  Transaction,
  Payment,
  Staff,
  Audit,
  Settings,
} from "../../assets/icons";

export interface SubItemProps {
  key: string;
  name: string;
  path: string;
}

export interface SideProps {
  key?: string;
  name: string;
  linkIcon: (type: string) => JSX.Element;
  activeState: string[] | string; // Optional
  subItems?: SubItemProps[]; // Optional
  path?: string;
  Icon?: JSX.Element;
}

export const menuItems: SideProps[] = [
  {
    name: "Dashboard",
    path: "/",
    linkIcon: (type: string) => <Dashboard type={type} />,
    activeState: ["/", "/short-loan", "/installment-loan"],
    subItems: [
      { name: "Short Loan", path: "/short-loan", key: "1" },
      { name: "Installment Loan", path: "/installment-loan", key: "2" },
    ],
  },
  {
    name: "Loans",
    path: "/loans",
    linkIcon: (type: string) => <Loan type={type} />,
    activeState: "/loans",
  },
  {
    name: "Transactions",
    path: "/transactions",
    linkIcon: (type: string) => <Transaction type={type} />,
    activeState: "/transactions",
  },
  {
    name: "Users",
    path: "/users",
    linkIcon: (type: string) => <User type={type} />,
    activeState: "/users",
  },
  {
    name: "Payments",
    path: "/payment",
    linkIcon: (type: string) => <Payment type={type} />,
    activeState: "/payment",
  },
  {
    name: "Wallet",
    path: "/wallet",
    linkIcon: (type: string) => <Wallet type={type} />,
    activeState: "/wallet",
  },
  {
    name: "Staff",
    path: "/staff",
    linkIcon: (type: string) => <Staff type={type} />,
    activeState: "/staff",
  },
  {
    name: "Audit Trail",
    path: "/audit-trail",
    linkIcon: (type: string) => <Audit type={type} />,
    activeState: "/audit-trail",
  },
  {
    name: "Settings",
    path: "/settings",
    linkIcon: (type: string) => <Settings type={type} />,
    activeState: "/settings",
  },
];
