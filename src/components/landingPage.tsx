import { useState } from "react";
import Ship from "../assets/svg/colored-ship.svg";
import WhiteShip from "../assets/svg/ship.svg";
import GPS from "../assets/svg/gps.svg";
import WhiteGPS from "../assets/svg/whiteGps.svg";
import Caret from "../assets/svg/downCaret.svg";
import GreenArrow from "../assets/svg/greenArrow.svg";

const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div className=" mx-5 max-lg:w-[500px] max-md:w-full mt-5 mb-16">
      <div className="text-center">
        <h1 className="text-[3.5rem] head-word font-bold text-white inline-block max-w-[700px] max-lg:text-[2.5rem] max-sm:text-[1.8rem]  ">
          Book Your International Shipments In Minutes
        </h1>
      </div>
      <div className="bg-white shadow-sm rounded-xl  mt-10 w-full">
        <div className="flex border-b">
          <div
            className={`flex justify-center items-center p-4 rounded-tl-xl gap-x-2 ${
              selectedTab === 0 && "bg-[#3AB44A] text-white"
            }`}
            onClick={() => setSelectedTab(0)}
          >
            <img src={selectedTab === 0 ? WhiteShip : Ship} alt="" />
            <p className="text-sm font-light">Ocean Freight</p>
          </div>
          <div
            className={`flex justify-center items-center p-4 gap-x-2 border-x ${
              selectedTab === 1 && "bg-[#3AB44A] text-white"
            }`}
            onClick={() => setSelectedTab(1)}
          >
            <img src={selectedTab === 1 ? WhiteGPS : GPS} alt="" />
            <p className="text-sm font-light">Tracking</p>
          </div>
        </div>
        <div className=" py-10 px-5 flex justify-between items-center w-full gap-x-5 max-lg:flex-col gap-y-5 ">
          <div className="flex-1 max-lg:w-full">
            <p className="text-[#6b7280] text-sm mb-1 font-light">
              Port of Loading
            </p>
            <div className="border flex items-center rounded-md">
              <input className="p-3 outline-none w-full" />
              <div>
                <img src={Caret} alt="" className="mx-2" />
              </div>
            </div>
          </div>
          <div className="mt-5 w-5 ">
            <img
              src={GreenArrow}
              alt=""
              className="max-lg:rotate-90 z-[0] relative"
            />
          </div>
          <div className="flex-1 max-lg:w-full">
            <p className="text-[#6b7280] text-sm mb-1 font-light">
              Port of Destination
            </p>
            <div className="border flex items-center rounded-md">
              <input className="p-3 outline-none w-full" />
              <div>
                <img src={Caret} alt="" className="mx-2" />
              </div>
            </div>
          </div>
          <div className="flex-1 max-lg:w-full">
            <p className="text-[#6b7280] text-sm mb-1 font-light">
              Cargo Ready Date
            </p>
            <div className="border rounded-md">
              <input
                type="date"
                className="p-3 outline-none text-[#6b7280] text-sm font-light w-full"
              />
            </div>
          </div>

          <div className="flex-1 max-lg:w-full">
            <p className="text-[#6b7280] text-sm mb-1 font-light">
              Container Size & Type
            </p>
            <div className="border flex items-center rounded-md">
              <input className="p-3 outline-none w-full" />
              <div>
                <img src={Caret} alt="" className="mx-2" />
              </div>
            </div>
          </div>
          <button className="py-3 px-10 text-white bg-[#3AB44A] mt-6 rounded-md max-lg:w-full">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
