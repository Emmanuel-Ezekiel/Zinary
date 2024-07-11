import { SearchIcon, NavDropdownIcon } from "../../assets/icons";
const Header = () => {
  return (
    <header className="w-full h-[4.4rem] bg-white flex items-center justify-between rounded-lg px-[1.9rem] cursor-pointer">
      <div className="flex w-auto items-center justify-between gap-1">
        <SearchIcon />
        <input type="text" className="border-none outline-none" />
      </div>

      <div className="flex w-auto items-center justify-between gap-2.5">
        <div className="flex w-auto items-start justify-between gap-2.5">
          <p className="text-[#A8A8A8] text-base font-medium leading-5 flex flex-col items-end">
            Sarah Shaibu
            <span className="text-[12px]/[15px] text-[#EC681C] font-semibold">
              Customer Service
            </span>
          </p>

          <img
            src="/images/avatar.png"
            alt="avatar"
            className="w-[2.75rem] h-[2.75rem]"
          />
        </div>

        <NavDropdownIcon />
      </div>
    </header>
  );
};

export default Header;
