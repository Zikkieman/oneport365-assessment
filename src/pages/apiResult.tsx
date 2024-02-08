// import { useContext, useState } from "react";

// import NavigationBar from "../components/navbar";
// import MiniNavigationBar from "../components/miniNavbar";
// import Home from "../assets/svg/home.svg";
// import Calendar from "../assets/svg/calendar.svg";
// import Location from "../assets/svg/location.svg";
// import Maersk from "../assets/svg/maersk.svg";
// import { ParameterContext } from "../context/store";

// const ApiResult = () => {
//   const [showMiniNav, setShowMiniNav] = useState<boolean>(false);
//   const { loading, date, destination, containerSize } =
//     useContext(ParameterContext);

//   return (
//     <div>
//       <div className="  relative flex flex-col">
//         <div className="flex justify-center border-b">
//           <NavigationBar nextPage={true} onTap={setShowMiniNav} />
//         </div>
//         {showMiniNav && (
//           <div className="fixed flex justify-center items-center w-full h-full bg-[#0618028c] lg:hidden">
//             <div className="bg-white h-[60rem] shadow-sm rounded-md w-[27rem] max-sm:w-full mx-5 top-5 ">
//               <MiniNavigationBar nextPage={true} onTap={setShowMiniNav} />
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="flex justify-center">
//         <div className="flex flex-col mt-10 items-center justify-center max-w-[970px] mx-7 w-full">
//           <div className="border bg-[#109b320d] rounded border-[rgb(229,231,235)] w-full ">
//             <div className="p-5">
//               <p className="text-lg font-normal">Ocean Freight Summary</p>
//             </div>
//             <div className="p-5 border-y border-[#e5e7eb] grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
//               <div className="flex gap-x-3 items-center border-[#e5e7eb]">
//                 <img src={Home} alt="" />
//                 <div className="flex flex-col">
//                   <p className="text-[#6b7280] font-light text-sm mb-1">
//                     Port of Loading
//                   </p>
//                   <p className="text-sm font-medium text-[#4b5563] inline-block w-52">
//                     Abu Dhabi (AEAUH) United Arab Emirates
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-x-3 items-center border-x border-[#e5e7eb] px-5 max-lg:border-none max-sm:px-0">
//                 <img src={Home} alt="" />
//                 <div className="flex flex-col">
//                   <p className="text-[#6b7280] font-light text-sm mb-1">
//                     Port of Destination
//                   </p>
//                   <p className="text-sm font-medium text-[#4b5563] inline-block w-52">
//                     Abu Dhabi (AEAUH) United Arab Emirates
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-x-3 items-center mb-4">
//                 <img src={Home} alt="" />
//                 <div className="flex flex-col">
//                   <p className="text-[#6b7280] font-light text-sm mb-1">
//                     Cargo Ready Date
//                   </p>
//                   <p className="text-sm font-medium text-[#4b5563]">
//                     05-02-2024
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center px-5 max-sm:px-2 ">
//         <div className="flex mt-10 w-full max-w-[970px]">
//           <div className="border border-[#e5e7eb] py-5 rounded max-md:border-none px-5 w-full">
//             <p className="text-lg text-[#111827] mb-4 ">
//               Select an Ocean Freight Rate
//             </p>
//             <div className=" flex gap-x-4 justify-center items-center w-fit">
//               <div>
//                 <button className="text-sm text-[#1F2937] border py-2 px-4 rounded-lg">
//                   All rates
//                 </button>
//               </div>
//               <button className="text-sm text-[#1F2937] border py-2 px-4 rounded-lg ">
//                 Quickest
//               </button>
//               <button className="text-sm text-[1F2937] border-grey-2 py-2 px-4 rounded-lg bg-[#1F2937] text-[#FFF]">
//                 Cheapest
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center px-5 max-sm:px-2 ">
//         <div className="flex mt-10 w-full max-w-[970px]">
//           <div className="border border-[#e5e7eb] py-5 rounded max-md:border-none px-5 w-full">
//             <div className="flex items-center gap-5 mb-10">
//               <img src={Maersk} alt="" />
//               <div>
//                 <p>
//                   Maersk{" "}
//                   <span className="text-sm text-[#059C01] bg-[#99ff7d1a] rounded-md ml-1 px-2 py-1">
//                     Special rate
//                   </span>
//                 </p>
//                 <p className="flex items-center gap-x-1 text-[#9ca3af] text-sm mt-2.5 font-light">
//                   Valid until
//                 </p>
//               </div>
//             </div>
//             <div className=" flex gap-x-10 justify-center items-center w-fit">
//               <div className="">
//                 <p className="text-sm grey-text font-light">Departure Date</p>
//                 <p></p>
//               </div>
//               <div className=" ">
//                 <p className="text-sm grey-text font-light">Free Days</p>
//                 <p></p>
//               </div>
//               <div className="">
//                 <p className="text-sm grey-text font-light">Transit Days</p>
//                 <p></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApiResult;
