import { IoIosArrowDown } from "react-icons/io";
import logo from "../../images/logo.png";
import SidebarButtons from "./sidebarButton";
import { Home} from "../../icons/home";
import { Icon } from "../icon";
import { Orders } from "../../icons/orders";

function SideBar() {
  return (
    <div className=" bg-blueGray w-60 h-full fixed">
      <div className="mt-6 ml-4 w-52 h-full">
        {/* first block */}
        <div className="inline-flex text-white gap-2 items-center">
          <img src={logo} className=" rounded-md"></img>
          <div className="">
            <div className="font-medium">Nishyan</div>
            <div className="font-light underline">Visit store</div>
          </div>
          <div className=" absolute right-5 h-6 w-6">
            <IoIosArrowDown size={30}></IoIosArrowDown>
          </div>
        </div>
        
        <div className=" py-6 gap-2 items-center">
          {/* <SidebarButtons /> */}
          <Icon icon={Home} size="small" />
          <Icon icon={Orders} size="medium"/>
        </div>
      </div>
    
    </div>
  );
}
export default SideBar;
