import Overview from "../Overview";
import Transactions from "../transactions";

const Slate = () => {

    return(
        <div className="px-20 py-20 grow bg-backgroundColor">
        <Overview/>
        <Transactions/>
        </div>
    )
}

export default Slate;