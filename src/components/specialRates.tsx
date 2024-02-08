import { useState } from "react";
import Caret from "../assets/svg/downCaret.svg";
import { carriesArr, sizeArr, typeArr } from "../constants/size-typeArr";
import Card from "./card";

const SpecialRates = () => {
  const [openSizeTab, setOpenSizeTab] = useState<boolean>(false);
  const [openTypeTab, setOpenTypeTab] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("20FT");
  const [selectedType, setSelectedType] = useState<string>("DRY");
  const [selectedCarrier, setSelectedCarrier] = useState<string>("COSCO");

  return (
    <div className="flex flex-col mt-16 max-w-[1200px] mx-auto px-6 relative">
      <div className="relative min-h-[900px]">
        <p className="font-medium text-4xl">Special Rates</p>
        <div className="mt-10 pb-14  relative border-b border-gray-200 flex flex-row gap-y-5 max-lg:flex-col justify-between gap-x-2 z-[50]">
          <div className="flex gap-x-5">
            <div className="relative">
              <div className="flex items-center  border-[#9CA3AF] gap-x-4 border  px-5 py-3 rounded ">
                <p>{selectedSize}</p>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenSizeTab(!openSizeTab), setOpenTypeTab(false);
                  }}
                >
                  <img src={Caret} alt="" className="w-[13px] " />{" "}
                </div>
              </div>
              {openSizeTab && (
                <div className="bg-white shadow-xl flex flex-col gap-y-3 absolute pl-5 pr-7 pb-5 pt-3 rounded-md">
                  {sizeArr.map((size, index) => (
                    <div key={index} onClick={() => setSelectedSize(size)}>
                      <p
                        className={`text-sm ${
                          selectedSize === size
                            ? "text-[#139C33]"
                            : "text-gray-500"
                        }  cursor-pointer`}
                      >
                        {size}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-x-2 border  px-5 py-3 rounded border-[#cbccce]">
                <p>{selectedType}</p>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenTypeTab(!openTypeTab), setOpenSizeTab(false);
                  }}
                >
                  <img src={Caret} alt="" className="w-[13px] " />{" "}
                </div>{" "}
              </div>
              {openTypeTab && (
                <div className="bg-white shadow-xl flex flex-col gap-y-3 absolute pl-5 pr-7 pb-5 pt-3 rounded-md">
                  {typeArr.map((type, index) => (
                    <div key={index} onClick={() => setSelectedType(type)}>
                      <p
                        className={`text-sm ${
                          selectedType === type
                            ? "text-[#139C33]"
                            : "text-gray-500"
                        }  cursor-pointer`}
                      >
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex custom-scrollbar items-center gap-x-3 max-lg:max-w-[500px] max-w-[750px] overflow-auto scroll-smooth">
            {carriesArr.map((name, index) => (
              <div
                className={`flex items-center  cursor-pointer border-[#9CA3AF] gap-x-2 px-4 py-3 border rounded w-auto min-w-fit  ${
                  selectedCarrier === name && "bg-black text-white"
                }`}
                key={index}
                onClick={() => setSelectedCarrier(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 ">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default SpecialRates;
