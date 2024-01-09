import React from "react";
import Filters from "./filters";
import { Icon } from "../icon";
import { ArrowNav } from "../../icons/arrowNav";

const table = [
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
  {
    id: "#28109",
    date: "7 July,2023",
    amount: "$1,278.23",
    fee: "$22",
  },
];

const Transactions = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="text-[#1A181E] text-xl font-medium">
        Transactions | This Month
      </div>
      <div className="bg-white">
        <Filters />
      </div>
      <div className=" bg-searchBar items-center w-full h-10 gap-x-10 inline-flex ">
        <div className="w-60  ml-2 text-sm   ">Order ID</div>
        <div className="w-60  ml-2 text-sm inline-flex items-center  ">
          Order date
          <Icon icon={ArrowNav} size="extraSmall" />
        </div>
        <div className="w-60  ml-2 text-sm   ">Order amount</div>
        <div className="w-60  ml-2 px-10 text-sm   ">Transaction fees</div>
      </div>
      <div className="w-full  flex flex-col">
        {table?.map((btn) => {
          return (
            <tr>
              <div className=" w-full h-10 border-b-2 border-searchBar items-center   ">
                <td className="w-60 px-4 text-[#146EB4]">{btn.id}</td>
                <td className=" w-60 px-20  justify-end">{btn.date}</td>
                <td className="w-60 px-32">{btn.amount}</td>
                <td className="w-60 ml-10 px-32">{btn.fee}</td>
              </div>
            </tr>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
