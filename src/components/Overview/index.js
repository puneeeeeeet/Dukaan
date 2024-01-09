import React from "react"
import { IoIosArrowDown } from "react-icons/io";

const Overview = () => {

    const details = [
        {
            title:"Online orders",
            value:'231'
        },
        {
            title:'Amount received',
            value:'23,92,312.19'
        }
    ]

    return(
        <div className="flex flex-col w-full gap-10 pb-8">
            <div className="flex flex-row justify-between">
                <div className="text-[#1A181E] text-xl font-medium">Overview</div>
                <button className="flex items-center gap-2 text-[#4D4D4D] font-normal text-base border rounded border-[#D9D9D9] px-2 py-1 bg-white">Last Month
                    <span><IoIosArrowDown/></span>
                </button>
            </div> 
            <div className="flex w-full gap-x-16">
                {
                    details?.map((detail) => {
                        return(
                            <div className="bg-white w-1/2 p-5 flex flex-col items-start gap-5 rounded-lg overview-shadow">
                                <div className="text-[#4D4D4D] font-normal text-base">{detail.title}</div>
                                <div className="text-[#1A181E] font-medium text-3xl">{detail.value}</div>    
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Overview;