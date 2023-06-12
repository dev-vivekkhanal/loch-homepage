import React, { useState } from "react";
import { isEmail } from "../helpers/checkEmail";

const SignUpForm = () => {
  // local variables
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  //   functions
  const onSignupSubmitHandler = (e) => {
    setError("");
    e?.preventDefault();
    if (isEmail(email)) {
      setEmail("");
      window.location.href = "https://app.loch.one/welcome";
    } else setError("Please enter a valid email");
  };
  return (
    <section className="w-[100%]  h-screen bg-white custom_box_shadow flex justify-center items-center lg:sticky top-0 p-5">
      {/* sign up contents */}
      <div className="w-full max-w-[365px]">
        <h1 className="text-[#B0B1B3] font-medium text-[2.45rem] leading-[2.9rem] mb-10">
          Sign up for <br /> exclusive access.
        </h1>

        <form onSubmit={onSignupSubmitHandler}>
          <input
            type="text"
            autoFocus
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            className="p-5 bg-white  placeholder:text-[#CACBCC] outline-none border border-[#E5E5E6] rounded-lg w-full custom_box_shadow_2 mb-1"
          />

          <p className="text-red-500 text-xs mb-8 font-medium ">{error}</p>

          <button className="bg-[#19191A] text-white w-full py-5 rounded-lg mb-10 hover:shadow-xl transition-all active:scale-[99%]">
            Get started
          </button>
        </form>

        <p className="font-semibold text-[#19191A]">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
