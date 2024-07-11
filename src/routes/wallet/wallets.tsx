import Header from "../../components/header/header";
import { NavDropdownIcon } from "../../assets/icons";
import Withdrawals from "./component/withdrawal";
import Totals from "./component/totals";
import BgImage from "../../assets/images/bg.svg";
import ApexChart from "./component/chart";
import Table from "./component/table";

const Wallet = () => {
  return (
    <div className="lg:p-8 w-full h-screen flex-1 md:p-0 overflow-auto flex-col md:flex-row sm:flex-none md:flex-1">
      <Header />

      <div className="mt-8 w-full flex items-center justify-between h-auto md:h-auto">
        <h2 className="text-[#505050] text-2xl/[21px] leading-5 font-bold">
          WalletOverview
        </h2>

        <div className="flex items-center w-auto gap-2">
          <p className="text-[#505050] text-xs font-semibold">Duration</p>

          <div className="h-[30px] w-[94px] bg-white border-[1px] border-[#E1E1E1] border-solid flex items-center rounded-lg gap-4 justify-center cursor-pointer">
            <p className="text-[#505050] font-medium text-xs">today</p>
            <NavDropdownIcon />
          </div>
        </div>
      </div>

      <div className="border-[1px] border-[#E1E1E1] w-full mt-[20px] "></div>

      <div className=" flex-col w-full lg:flex-row h-auto mt-[16px]  gap-[30px] flex md:flex-wrap justify-between items-center">
        <div className="w-full lg:w-[31.7%] h-full bg-white shadow-shadow-[0px_4px_30px_0px_#0000000F] flex flex-col gap-[16px] p-[16px] rounded-lg">
          <Withdrawals />
          <div className="w-full h-[58px] bg-[#505050] rounded-lg flex items-center justify-between px-[16px]">
            <p className="text-white font-bold text-xs/[14.32px]">
              Total Amount
            </p>
            <span className="text-base/[17px] text-white font-bold">
              N3,402,300
            </span>
          </div>
        </div>
        <div
          className="w-full lg:w-[14.5%] h-full rounded-lg bg-[#EC681C] opacity-80 py-[16px] px-[23px] bg-no-repeat bg-center bg-cover relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${BgImage})`,
            backgroundBlendMode: "multiply",
          }}
        >
          <Totals />
        </div>
        <div className="md:w-full lg:w-[48.7%] h-full bg-white shadow-shadow-[0px_4px_30px_0px_#0000000F] rounded-lg py-[24px] px-[16px]">
          <ApexChart />
          <div className="w-full h-[27px] bg-[#F4F4F4] rounded-lg flex items-center justify-center">
            <div className="w-auto flex gap-[72px] items-center">
              <div className="flex gap-[4px] items-center">
                <div className="bg-[#FFDB8B] h-[8px] w-[8px] rounded-full"></div>
                <p className="text-[#505050] text-xs/[17px] font-normal">
                  Withdrawal
                </p>
              </div>
              <div className="flex gap-[4px] items-center">
                <div className="bg-[#F29560] h-[8px] w-[8px] rounded-full"></div>
                <p className="text-[#505050] text-xs/[17px] font-normal">
                  Deposit
                </p>
              </div>
              <div className="flex gap-[4px] items-center">
                <div className="bg-[#C4C4C4] h-[8px] w-[8px] rounded-full"></div>
                <p className="text-[#505050] text-xs/[17px] font-normal">
                  Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default Wallet;
