import React from "react";
import Filters from "./filters";

const Transactions = () => {

    return(
        <div className="flex flex-col w-full gap-8">
            <div className="text-[#1A181E] text-xl font-medium">Transactions | This Month</div>
            <div className="bg-white">
                <Filters/>
            </div>
        </div>
    )
}

export default Transactions;