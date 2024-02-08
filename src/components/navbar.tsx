import { useState } from "react";

import LogoWhite from "../assets/svg/whitelogo.svg";
import NigerianFlag from "../assets/svg/nigeria.svg";
import GhanaFlag from "../assets/svg/Ghana.svg";
import KenyaFlag from "../assets/svg/kenya.svg";
import Caret from "../assets/svg/caret.svg";
import Check from "../assets/svg/green-check.svg";
import Menu from "../assets/svg/menu.svg";


export type PropType = {
  onTap: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavigationBar = ({ onTap }: PropType) => {
  const [showCountry, setShowCountry] = useState<boolean>(false);
  const [showFlag, setShowFlag] = useState<number>(0);

  return (
    <div
      className={`flex justify-between items-center py-8  text-white font-medium text-sm w-[70rem] mx-5`}
    >
      <div className="mt-0">
        <img src={LogoWhite} className="" />
      </div>
      <div
        className={`flex gap-8 max-lg:hidden`}
      >
        <p>About Us</p>
        <p>Services</p>
        <p>Contact Us</p>
        <p>Careers</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-x-5">
          <p className={`max-lg:hidden`}>
            Login
          </p>
          <button
            className="py-3 px-5 rounded-md max-sm:hidden"
            style={{ backgroundColor: "#3ab44a" }}
          >
            Create Account
          </button>
        </div>
        <div className="flex justify-center items-center gap-x-5 max-lg:flex-row-reverse">
          <div
            className="h-10 border-l"
            style={{ borderColor: "rgba(152, 255, 155, 0.2)" }}
          ></div>
          <div className="relative">
            <div
              onClick={() => setShowCountry(!showCountry)}
              className="cursor-pointer flex justify-center items-center gap-x-1"
            >
              <img
                className="w-[20px]"
                src={
                  showFlag === 0
                    ? NigerianFlag
                    : showFlag === 1
                    ? GhanaFlag
                    : KenyaFlag
                }
                alt="flag"
              />
              <img src={ Caret} alt="caret" />
            </div>
            {showCountry && (
              <div className="flex flex-col gap-3 absolute bg-white shadow-sm rounded-md text-black w-[170px] py-6 mt-4 right-0 text-xs">
                <div
                  className="flex gap-x-2 justify-center items-center cursor-pointer "
                  onClick={() => {
                    setShowFlag(0), setShowCountry(false);
                  }}
                >
                  <img
                    src={NigerianFlag}
                    alt="Nigerian flag"
                    className="w-[20px]"
                  />
                  <p>Nigeria</p>
                  <div className="w-[15px]">
                    {showFlag === 0 && (
                      <img src={Check} alt="" className="w-[15px]" />
                    )}
                  </div>
                </div>
                <div
                  className="flex gap-x-2 justify-center items-center cursor-pointer"
                  onClick={() => {
                    setShowFlag(1), setShowCountry(false);
                  }}
                >
                  <img
                    src={GhanaFlag}
                    alt="Ghanaian flag"
                    className="w-[20px] "
                  />
                  <p>Ghana</p>
                  <div className="w-[15px]">
                    {showFlag === 1 && (
                      <img src={Check} alt="" className="w-[15px]" />
                    )}
                  </div>
                </div>
                <div
                  className="flex gap-x-2 justify-center items-center cursor-pointer"
                  onClick={() => {
                    setShowFlag(2), setShowCountry(false);
                  }}
                >
                  <img src={KenyaFlag} alt="Kenya flag" className="w-[20px]" />
                  <p>Kenya</p>
                  <div className="w-[15px]">
                    {showFlag === 2 && (
                      <img src={Check} alt="" className="w-[15px]" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden" onClick={() => onTap(true)}>
          <img src={Menu} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
