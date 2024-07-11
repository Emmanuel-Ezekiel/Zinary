

export interface WithdrawalsType {
  title?: string;
  amount?: string;
  cases?: string;
  color?: string;
  id?: number;
}

export interface Transaction {
  id: number;
  name: string;
  transactionRef: string;
  type: string;
  amount: string;
  date: string;
  status: string;
  serieNumber: string;
}

export const withdrawalsData: WithdrawalsType[] = [
  {
    title: "Withdrawals",
    amount: "N3,402,300",
    cases: "722 Cases",
    id: 1,
  },
  {
    title: "Withdrawals",
    amount: "N3,402,300",
    cases: "722 Cases",
    id: 2,
  },
  {
    title: "Withdrawals",
    amount: "N3,402,300",
    cases: "722 Cases",
    id: 3,
  },
  {
    title: "Withdrawals",
    amount: "N3,402,300",
    cases: "722 Cases",
    id: 4,
  },
];

export const withdrawalTotalData: WithdrawalsType[] = [
  {
    title: "Total Withdrawals",
    amount: "N3,402,300",
    id: 1,
  },
  {
    title: "Total Deposits",
    amount: "N3,402,300",
    id: 2,
  },
  {
    title: "Total Payments",
    amount: "N3,402,300",
    id: 3,
  },
  {
    title: "Total Commission",
    amount: "N3,402,300",
    id: 4,
  },
  {
    title: "Total Amount",
    amount: "N3,402,300",
    id: 5,
  },
];
export const chartData: WithdrawalsType[] = [
  {
    title: "Withdrawal",
    color: "#FFDB8B",
    id: 1,
  },
  {
    title: "Deposit",
    color: "#F29560",
    id: 2,
  },
  {
    title: "Payment",
    color: "#C4C4C4",
    id: 3,
  },
];

export const Tabledata: Transaction[] = [
  {
    id: 1,
    name: "Tife Balogun",
    transactionRef: "tanya.hill@example.com",
    type: "Deposit",
    amount: "₦34,694.145",
    date: "Dec 4, 2019 21:42",
    status: "Successful",
    serieNumber: "0000001",
  },
  {
    id: 1,
    name: "Kelechi Nwosu",
    transactionRef: "georgia.young@example.com",
    type: "Withdrawal",
    amount: "₦784,324.34",
    date: "Dec 7, 2019 23:26",
    status: "Failed",
    serieNumber: "0000001",
  },
  {
    id: 1,
    name: "Temi Obadofin",
    transactionRef: "deanna.curtis@example.com",
    type: "Payment",
    amount: "₦11,784.22",
    date: "Dec 30, 2019 05:18",
    status: "Pending",
    serieNumber: "0000001",
  },
];

export const TableTabsData = [
  {
    id: 1,
    tab: "All",
  },
  {
    id: 1,
    tab: "Withdrawal",
  },
  {
    id: 1,
    tab: "Deposit",
  },
  {
    id: 1,
    tab: "Payment",
  },
];



