import React from "react";
import { withdrawalsData } from "../../../constants/constants";

const Withdrawals = () => {
  return (
    <div className="w-auto h-auto flex flex-wrap gap-[16px]">
      {withdrawalsData.map((item) => (
        <div
          key={item.id}
          className="w-[48%] h-[110px] bg-[#FFF7E5] rounded-lg px-[17px] py-[22px] flex flex-col gap-[16px]"
        >
          <p className="text-[#505050] text-xs/[14.32px] font-bold">
            {item.title}
          </p>

          <div className="flex flex-col gap-[4px]">
            <p className="text-[#FF6600] text-[17px]/[17px] font-bold ">
              {item.amount}
            </p>
            <span className="text-[#505050] text-xs/[14.32px] font-normal">
              {item.cases}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Withdrawals;
