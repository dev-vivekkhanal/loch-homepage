// components
import SignUpForm from "../components/SignUpForm";
import Testimonial from "../components/Testimonial";
import Section1and2 from "../components/Section1and2";
// react hooks
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-black">
      {/* left side contents */}
      <div className="w-[100%]  flex-1 radial-gradient-custom-bg py-20  ">
        <Section1and2 />
        <Testimonial />
      </div>
      {/* right side contents */}
      <div className=" w-full flex-[0.8]">
        <SignUpForm />
      </div>
    </div>
  );
};

export default LandingPage;
