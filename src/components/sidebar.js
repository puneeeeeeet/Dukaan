import { IoIosArrowDown } from "react-icons/io";
import Image from './Image.png'
import { GoHome } from "react-icons/go";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GrAppsRounded } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiSpeakerHigh ,PiNavigationArrow } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";
// import {  } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import SidebarButtons from "./sidebarButton";


const SiidebarButtons = [
       {
        label: 'Home',
        icon: <GoHome className="text-3xl" />,
        url: '/',
       },
       {
        label: 'Orders',
        icon: <HiOutlineClipboardList className="text-3xl" />,
        url: '/',
       },
       {
        label: 'Products',
        icon: <GrAppsRounded className="text-3xl" />,
        url: '/',
      },
      {
        label: 'Delivery',
        icon: <CiDeliveryTruck className="text-3xl" />,
        url: '/',
      },
      {
        label: 'Marketing',
        icon: <PiSpeakerHigh className="text-3xl" />,
        url: '/',
      },
      {
        label: 'Analytics',
        icon: <SiGoogleanalytics className="text-3xl" />,
        url: '/',
      },
      {
        label: 'Payments',
        icon: <MdOutlinePayments className="text-3xl" />,
        url: '/',
      },
      {
        label: 'Discounts',
        icon: <TbDiscount2 className="text-3xl" />,
        url: '/',
      },
]



function SideBar(){
    return(
       <div className=" bg-blueGray w-60 h-full fixed">
        <div className="mt-6 ml-4 w-52 h-full">
             {/* first block */}
           <div className="inline-flex text-white gap-2 items-center">
                <img src={Image} className=" rounded-md">
                </img>
                <div className="">
                    <div className="font-medium">
                    Nishyan
                    </div>
                    <div className="font-light underline">
                    Visit store
                    </div>
                </div>
                <div className=" absolute right-5 h-6 w-6">
                    <IoIosArrowDown size={30}></IoIosArrowDown>
                </div>
           </div>
           {/* first block ends */}
        <div className=" ">
            <SidebarButtons />
        </div>
        </div>
       </div>

    )
}
export default SideBar;