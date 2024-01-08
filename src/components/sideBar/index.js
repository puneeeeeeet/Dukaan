import logo from "../../images/logo.png";
import SidebarButtons from "./sidebarButton";
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
            <Icon icon={DropdownArrow} size="medium" />
          </div>
        </div>

        {/* <SidebarButtons /> */}
        <div className="mt-6  w-52 gap-y-1 fixed flex flex-col">
          <div className="pl-4 h-9  gap-x-3 items-center flex flex-row">
              <Icon icon={Home} size="small" />
              Home
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Orders} size="medium" />
            Orders
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Products} size="medium" />
              Products
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Delivery} size="medium" />
            Delivery
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Marketing} size="medium" />
            Marketing
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Analytics} size="medium" />
            Analytics
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Payouts} size="medium" />
            Payouts
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Discounts} size="medium" />
            Discounts
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Audience} size="medium" />
            Audience
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Appearance} size="medium" />
            Appearance
          </div>
          <div className="pl-4 h-9  gap-x-3 items-center  flex flex-row">
            <Icon icon={Plugins} size="medium" />
            Plugins
          </div>
          

        </div>
      </div>
    </div>
  );
}
export default SideBar;
