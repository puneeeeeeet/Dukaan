import React from "react";
import Filters from "./filters";
import { Icon } from "../icon";
import { Menu } from "../../icons/menu";
import { Info } from "../../icons/info";

const orderHeadings = [
  {
    title: "Order ID",
    icon: {},
  },
  {
    title: "Order Date",
    icon: { Menu },
  },
  {
    title: "Order amount",
    icon: {},
  },
  {
    title: "Transaction fees",
    icon: { Info },
  },
];


const table =[
    {
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },{
        id:"#28109",
        date:"7 July,2023",
        amount:"$1,278.23",
        fee:"$22",
    },
]

const Transactions = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="text-[#1A181E] text-xl font-medium">
        Transactions | This Month
      </div>
      <div className="bg-white">
        <Filters />
      </div>
      <div className=" bg-searchBar items-center w-full h-10 gap-x-10 inline-flex ">
        {orderHeadings?.map((btn) => {
          return (
            <div className="w-60  ml-2 text-sm    ">
              {btn.title}
              {/* <Icon {orderHeadings.icon} size="extraSmall" /> */}
            </div>
          );
        })}
      </div>
      <div className="w-screen ">

        {
            table?.map((btn)=>{
                return(
                    <div className="w-60 bg-white ml-2 text-sm">
                    {btn.id}
                    {btn.date}
                    {btn.amount}
                    {btn.fee}
                </div>

                )
            })
        }
       
      </div>
    </div>
  );
};

export default Transactions;
