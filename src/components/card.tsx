type CardType = {
  carrierName: string;
  totalAmount: number;
  origin: string;
  destination: string;
  sailingDate: null | string;
  transitTime: number | string;
  demurrage: number;
  detention: number;
};
const Card = ({
  carrierName,
  totalAmount,
  origin,
  destination,
  sailingDate,
  transitTime,
  demurrage,
  detention,
}: CardType) => {
  return (
    <div className="">
      <div className="p-5 rounded-[10px] cursor-pointer border-[2px] border-solid border-[#E5E7EB] hover:border-[#139C33]">
        <div className="border-b border-gray-300 flex justify-between  pb-5">
          <div className="">
            <p className="font-medium mb-3">{carrierName}</p>
            <p className="font-medium text-xl">${totalAmount}</p>
          </div>
          <p>
            {origin} - {destination}
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <p className="font-light  mb-2 text-gray-600 max-sm:text-sm">
              Sailing Date
            </p>
            <p>{sailingDate}</p>
          </div>
          <div>
            <p className="font-light  mb-2 text-gray-600 max-sm:text-sm">
              Transit Time
            </p>
            <p>{transitTime}</p>
          </div>
          <div>
            <p className="font-light  mb-2 text-gray-600 max-sm:text-sm">
              Free Days
            </p>
            <p>{ demurrage - detention} days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
