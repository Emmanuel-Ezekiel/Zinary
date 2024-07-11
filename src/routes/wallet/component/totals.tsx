import { withdrawalTotalData } from "../../../constants/constants";
const Totals = () => {
  return (
    <div className="flex flex-col gap-[16px]">
        {withdrawalTotalData.map((item) => (
            <div className="flex flex-col gap-[16px]" key={item.id}>
                <div className="flex flex-col gap-[4px]">
                    <p className="text-white text-xs/[14.32px] font-normal">{item.title}</p>
                    <span className="text-white text-base/[17px] font-bold">{item.amount}</span>
                </div>

                <div className="w-full border-[1px] border-white border-solid">

                </div>
            </div>
        ))}

    </div>
  )
}

export default Totals;