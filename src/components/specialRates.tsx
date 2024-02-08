import { useEffect, useState } from "react";
import Caret from "../assets/svg/downCaret.svg";
import { carriesArr, sizeArr, typeArr } from "../constants/size-typeArr";
import Card from "./card";
import { RateType } from "../constants/rateType";
import Spinner from "./spinner";

const SpecialRates = () => {
  const [openSizeTab, setOpenSizeTab] = useState<boolean>(false);
  const [openTypeTab, setOpenTypeTab] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("20FT");
  const [selectedType, setSelectedType] = useState<string>("DRY");
  const [selectedCarrier, setSelectedCarrier] = useState<string>("COSCO");
  const [responseArr, setReponseArr] = useState<RateType[]>([]);
  const [filteredData, setFilteredData] = useState<RateType[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const itemsPerPage = 9;
  const totalItems = filteredData.length;
  const maxItems = showAll ? totalItems : itemsPerPage;

  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  useEffect(() => {
    const lowercaseSelectedType = selectedType.toLowerCase();
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(
          `https://test-api.oneport365.com/api/live_rates/get_special_rates_no_auth?container_size=${selectedSize}&container_type=${lowercaseSelectedType}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (result.status === "success") {
          setReponseArr(result.data.rates);
        } else {
          setError("Fetch failed!!! Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Fetch failed!!! Please try again.");
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [selectedSize, selectedType]);

  useEffect(() => {
    const filteredResponse = responseArr.filter(
      (response) => response.carrier_name === selectedCarrier
    );
    setFilteredData(filteredResponse);
  }, [responseArr, selectedCarrier]);

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
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedSize(size), setOpenSizeTab(false);
                      }}
                    >
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
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedType(type), setOpenTypeTab(false);
                      }}
                    >
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
                onClick={() => {
                  setSelectedCarrier(name), setShowAll(false);
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        {isFetching ? (
          <div className="flex justify-center items-center h-[200px]">
            <Spinner />
          </div>
        ) : error !== "" ? (
          <>
            <div className="text-red-500 flex justify-center items-center h-[200px]">
              <p className="text-lg">{error}</p>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-5">
              {filteredData.slice(0, maxItems).map((data, index) => (
                <div key={index}>
                  <Card
                    carrierName={data.carrier_name}
                    totalAmount={data.total_amount_usd}
                    origin={data.origin_port_code}
                    destination={data.destination_port_code}
                    sailingDate={data.sailing_date || "N/A"}
                    transitTime={data.transit_time || "N/A"}
                    demurrage={data.demurrage_days}
                    detention={data.detention_days}
                  />
                </div>
              ))}
            </div>
            <div className="my-10 flex justify-center items-center">
              {totalItems > itemsPerPage && (
                <div className="flex flex-col gap-y-3 font-light">
                  <p>
                    Viewing {Math.min(maxItems, totalItems)} out of {totalItems}{" "}
                    special rates
                  </p>

                  <button
                    onClick={handleToggleShowAll}
                    className="border border-black py-3 px-2 rounded"
                  >
                    {showAll ? "Show less" : "Show all"}
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SpecialRates;
