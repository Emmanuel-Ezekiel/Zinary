import React, { useState } from "react";
import {
  Tabledata,
  TableTabsData,
  Transaction,
} from "../../../constants/constants";
import { SearchSmallIcon, NavDropdownIcon } from "../../../assets/icons";
import { TableDropdownIcon } from "../../../assets/icons";
const Table = () => {
  const [activeTab, setActiveTab] = useState<string>("All"); // State type: string
  const [sortBy, setSortBy] = useState<{
    field: keyof Transaction;
    ascending: boolean;
  }>({
    field: "date",
    ascending: true,
  }); // State type: { field: string; ascending: boolean }
  const [searchTerm, setSearchTerm] = useState<string>(""); // State type: string

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Implement filtering logic based on tab selection if needed
  };

  const handleSort = (field: keyof Transaction) => {
    if (sortBy.field === field) {
      setSortBy({ ...sortBy, ascending: !sortBy.ascending });
    } else {
      setSortBy({ field, ascending: true });
    }
  };

  const sortedData = [...Tabledata].sort((a, b) => {
    const fieldA =
      typeof a[sortBy.field] === "string"
        ? (a[sortBy.field] as string).toUpperCase()
        : a[sortBy.field];
    const fieldB =
      typeof b[sortBy.field] === "string"
        ? (b[sortBy.field] as string).toUpperCase()
        : b[sortBy.field];
    const comparison = fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
    return sortBy.ascending ? comparison : -comparison;
  });

  const filteredData = sortedData
    .filter(
      (item) =>
        activeTab === "All" ||
        item.type.toLowerCase() === activeTab.toLowerCase()
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.transactionRef.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="w-full flex flex-col gap-[16px] h-auto mt-[24px]">
      <div className="w-full h-[96px]">
        <div className="bg-white w-full h-[48px]  border-b-[1px] border-[#E0E0E0] border-solid flex gap-[40px]">
          {TableTabsData.map((item) => (
            <button
              key={item.id}
              className={`px-4 py-2 ${
                activeTab === item.tab
                  ? "text-[#FF6600] text-[14px]/[18px] font-semibold border-b-[2px] border-[#FF6600]"
                  : "text-[#505050] text-[14px]/[18px] font-semibold"
              }`}
              onClick={() => handleTabChange(item.tab)}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="bg-white w-full h-[48px] flex items-center justify-between px-[24px]">
          <div className="w-[198px] px-[10px] h-[24px] flex gap-[4px] items-center bg-[#F7F6F4] border-[1px] border-[#DEDEDE] border-solid rounded-lg">
            <SearchSmallIcon />
            <input
              type="text"
              className="outline-none bg-[#F7F6F4] h-[14px] w-[120px] text-sm placeholder:text-[10px] focus:outline-none"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-auto flex gap-[16px] items-center">
            <p className="text-[#A8A8A8] text-[12px]/[14.32px] font-medium">
              Display
            </p>

            <div className="flex gap-[8px] items-center">
              <div className="bg-[#F7F6F4] w-[52px] h-[24px] border-solid border-[1px] border-[#E1E1E1] items-center justify-end flex px-[10px] cursor-pointer rounded-lg">
                <NavDropdownIcon />
              </div>

              <p className="text-[#A8A8A8] text-[12px]/[14.32px] font-medium">
                Rows
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <div className="w-full mx-auto">
          <div className="rounded-lg w-full h-[40px] bg-[#848484] flex items-center text-white text-[12px]/[15px] font-semibold">
            <div className="px-4 py-2 w-1/12">S/N</div>
            <div
              className="px-4 py-2 w-2/12 cursor-pointer flex  items-center gap-[6px]"
              onClick={() => handleSort("name")}
            >
              <div className="flex flex-col gap-1">
                <TableDropdownIcon type="up" />
                <TableDropdownIcon type="down" />
              </div>
              Name
            </div>
            <div className="px-4 py-2 w-3/12">Transaction Reference</div>
            <div
              className="px-4 py-2 w-1/12 cursor-pointer"
              onClick={() => handleSort("type")}
            >
              Type
            </div>
            <div
              className="px-4 py-2 w-2/12 cursor-pointer"
              onClick={() => handleSort("amount")}
            >
              Amount{" "}
            </div>
            <div
              className="px-4 py-2 w-2/12 cursor-pointer flex  items-center gap-[6px]"
              onClick={() => handleSort("date")}
            >
              <div className="flex flex-col gap-1">
                <TableDropdownIcon type="up" />
                <TableDropdownIcon type="down" />
              </div>
              Date
            </div>
            <div
              className="px-4 py-2 w-1/12 cursor-pointer flex  items-center gap-[6px]"
              onClick={() => handleSort("status")}
            >
              <div className="flex flex-col gap-1">
                <TableDropdownIcon type="up" />
                <TableDropdownIcon type="down" />
              </div>
              Status{" "}
            </div>
            <div className="px-4 py-2 w-1/12 cursor-pointer"></div>
          </div>
          <div className="mt-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex bg-white h-[60px] mt-[8px] rounded-lg text-[14px]/[17px] text-[#505050]  font-normal items-center px-[5px]"
              >
                <div className="px-4 py-2 w-1/12">{item.serieNumber}</div>
                <div className="px-4 py-2 w-2/12">{item.name}</div>
                <div className="px-4 py-2 w-3/12">{item.transactionRef}</div>
                <div className="px-4 py-2 w-1/12">{item.type}</div>
                <div className="px-4 py-2 w-2/12">{item.amount}</div>
                <div className="px-4 py-2 w-2/12">{item.date}</div>
                <div className="px-4 py-2 w-1/12">{item.status}</div>
                <button className=" py-1  w-1/12  bg-[#EC681C] rounded-lg text-white">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
