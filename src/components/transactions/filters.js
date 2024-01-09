import React from "react";
import { Search } from "../../icons/search";
import { Icon } from "../icon";
import { Sort } from "../../icons/sort";
import { Download } from "../../icons/download";

const Filters = () => {

    return(
        <div className="p-3 flex justify-between w-full">
            <div className="input-with-icon h-fit">
            <Icon icon={Search} size="small" className="icon"/>
            <input type="text" className="block rounded-md py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-[#D9D9D9]" placeholder="Search by order ID..."/>
            </div>
            <div className="flex items-center gap-x-3">
                <button className="flex items-center gap-2 text-[#4D4D4D] font-normal text-base border rounded border-[#D9D9D9] px-2 py-1 bg-white h-9">Sort
                    <Icon icon={Sort} size="small"/>
                </button>
                <button className="flex items-center gap-2 text-[#4D4D4D] font-normal text-base border rounded border-[#D9D9D9] px-2 py-1 bg-white h-9">
                    <Icon icon={Download} size="small"/>
                </button>
            </div>
        </div>
    )

}

export default Filters;