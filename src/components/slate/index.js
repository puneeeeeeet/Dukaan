import Overview from "../Overview";
import Transactions from "../transactions";
import Navbar from "../navbar";

const Slate = () => {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <div className="px-20 py-8 grow bg-backgroundColor">
        <Overview />
        <Transactions />
      </div>
    </div>
  );
};

export default Slate;
