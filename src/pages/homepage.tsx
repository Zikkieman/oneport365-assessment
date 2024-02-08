import { useState } from "react";

import NavigationBar from "../components/navbar";
import MiniNavigationBar from "../components/miniNavbar";
import LandingPage from "../components/landingPage";
import SpecialRates from "../components/specialRates";

const Homepage = () => {
  const [showMiniNav, setShowMiniNav] = useState<boolean>(false);

  return (
    <div>
      <div className="hero-div  relative flex flex-col h-auto">
        <div className="flex justify-center border-b">
          <NavigationBar  onTap={setShowMiniNav} />
        </div>
        {showMiniNav && (
          <div className="absolute flex justify-center items-center w-full h-full bg-[#0618028c] lg:hidden">
            <div className="bg-white h-[60rem] shadow-sm rounded-md w-[27rem] max-sm:w-full mx-5 top-5 ">
              <MiniNavigationBar  onTap={setShowMiniNav} />
            </div>
          </div>
        )}
        <div className="flex justify-center mt-10 h-auto">
          <LandingPage />
        </div>
      </div>
      <div>
        <SpecialRates />
      </div>
    </div>
  );
};

export default Homepage;
