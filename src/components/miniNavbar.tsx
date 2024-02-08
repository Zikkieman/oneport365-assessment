import oneportSvg from "../assets/svg/oneport-logo.e6a157f11962b2450e0d6754d4a6f4bd.svg";
import Close from "../assets/svg/close.svg";
import { PropType } from "./navbar";
// import CaretRight from "../assets/svg/caret-right.svg";

const MiniNavigationBar = ({ onTap }: PropType) => {
  return (
    <div className="py-5 h-full flex flex-col relative z-[100] bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center border-b-[2px] border-solid border-[#eaecf080] py-5 px-5">
        <img src={oneportSvg} alt="logo" />
        <div onClick={() => onTap(false)}>
          <img src={Close} alt="icon" />
        </div>
      </div>
      <div className="flex flex-col gap-y-10 text-[#6b7280] font-normal mt-10 px-8">
        <p>About Oneport</p>
        <div>
          <p>Our Services</p>
        </div>
        <p>Contact Us</p>
        <p>Careers</p>
      </div>
      <div className=" mt-auto flex flex-col w-full  px-5 gap-y-3">
        <button className="text-sm  py-3 px-6 text-center font-medium rounded  bg-[#F6FEF4] text-[#005D00] border">
          Login
        </button>
        <button className="text-sm  py-3 px-6 text-center text-white font-medium rounded bg-[#3ab44a]">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default MiniNavigationBar;
