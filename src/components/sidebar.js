import { IoIosArrowDown } from "react-icons/io";
import Image from './Image.png'


function SideBar(){
    return(
       <div className=" bg-blueGray w-60 h-full fixed">
        <div className="mt-6 ml-4 w-52  h-full">
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
                <div className=" absolute right-4 font-extrabold h-6 w-6">
                    <IoIosArrowDown size={30}></IoIosArrowDown>
                </div>
           </div>
           {/* first block ends */}
        </div>
       </div>

    )
}
export default SideBar;