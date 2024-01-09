import logo from "../../images/logo.png";
// import SidebarButtons from "./sidebarButton";
import { Home } from "../../icons/home";
import { Icon } from "../icon";
import { Orders } from "../../icons/orders";
import { DropdownArrow } from "../../icons/dropdownArrow";
import {Products} from "../../icons/products";
import {Delivery} from "../../icons/delivery";
import {Marketing} from "../../icons/marketing";
import {Analytics} from "../../icons/analytics";
import {Payouts} from "../../icons/payouts";
import {Discounts} from '../../icons/discounts';
import {Audience} from '../../icons/audience';
import {Appearance} from '../../icons/appearance';
import {Plugins} from '../../icons/plugins';
import {Credits} from '../../icons/Credits';

function SideBar() {
  return (
    <div className=" bg-blueGray w-60 text-white h-full fixed">
      <div className="mt-4 mx-2.5 w-52 h-full flex-col">
        {/* first block */}
        <div className=" inline-flex items-center">
          <img src={logo} className=" h-10 rounded-md"></img>
          <div className=" ml-3  relative">
            <div className="w-28 h-5 font-medium text-base ">Nishyan</div>
            <div className="font-light h-4 mt-1 text-xs underline">Visit store</div>
          </div>
          <div className=" absolute right-5 ml-3 ">
            <Icon icon={DropdownArrow} size="small" />
          </div>
        </div>

        {/* <SidebarButtons /> */}
        <div className="mt-6 mx-2.5 w-52 gap-y-1 fixed flex flex-col">
          <div className="pl-4 h-9  gap-x-3 items-center rounded flex flex-row">
              <Icon icon={Home}  />
              Home
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Orders}  />
            Orders
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Products}  />
              Products
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Delivery}  />
            Delivery
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Marketing}  />
            Marketing
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Analytics}  />
            Analytics
          </div>
          <div className="pl-4 h-9 w-full bg-customWhite gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Payouts}  />
            Payouts
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Discounts}  />
            Discounts
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Audience}  />
            Audience
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Appearance}  />
            Appearance
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center rounded  flex flex-row">
            <Icon icon={Plugins}  />
            Plugins
          </div>
        </div>

        <div className = "ml-5 absolute px-3 py-1.5 bottom-0 left-0 w-48 h-14 bg-gray rounded mb-4">
           <div className="w-full h-full gap-3 inline-flex">
             <div className="w-10 h-10 bg-customWhite flex  place-content-center rounded  ">
              <div className="my-1">
              <Icon icon={Credits} size="large"  />
              </div>
             </div>
             <div className="flex flex-col">
              <div className="text-xs">
                Available Credits
              </div>
              <div className="text-base">
                222.10
              </div>
             </div>
             <div>
              
             </div>
           </div>

        </div>
      </div>
    </div>
  );
}
export default SideBar;
