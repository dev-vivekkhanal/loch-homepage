// react and hooks
import React, { useState } from "react";
// local assets
import eye_icon from "../assets/eye-icon.svg";
import notification_icon from "../assets/notification_icon.svg";
import cohorts from "../assets/cohorts.svg";
import notification from "../assets/notification.svg";
import checkmark from "../assets/checkmark.svg";
import bar from "../assets/bar.svg";
import clock from "../assets/clock.svg";
import down_arrow from "../assets/down_arrow.svg";
// caroausel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// helper functions
import { isEmail } from "../helpers/checkEmail";

const Section1and2 = () => {
  // local variables
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  //   functions
  const handleDragStart = (e) => e.preventDefault();
  const notificationEmailHandler = (e) => {
    setError("");
    e.preventDefault();
    // chech is email is in valid format
    isEmail(email) ? setEmail("") : setError("“Please enter a valid email”");
  };
  const sectionData = [
    {
      id: 1,
      title: "Get notified when a highly correlated whale makes a move",
      text: "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
      icon: notification_icon,
    },

    {
      id: 2,
      title: "Watch what the whales are doing",
      text: "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
      icon: eye_icon,
    },
  ];

  const carousel_items = [
    <div className="pr-5" onDragStart={handleDragStart} role="presentation">
      <form
        onSubmit={notificationEmailHandler}
        className="p-5 rounded-lg notification text-[#19191A] w-[12rem] aspect-square"
      >
        <div className="flex justify-between items-start mb-4">
          <img src={notification} alt="notification" />

          <button className=" font-semibold text-xs active:scale-95 transition-all">
            Save
          </button>
        </div>

        <p className="font-medium text-sm mb-2">
          We’ll be sending notifications to you here
        </p>

        <input
          type="text"
          placeholder="hello@loch.one"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          className="w-full bg-white rounded-lg p-2 border outline-[#D4D4D4] transition-all border-[#D4D4D4]  font-medium text-sm"
        />

        <p className="text-red-500 text-xs">{error}</p>
      </form>
    </div>,

    <div className="pr-5" onDragStart={handleDragStart} role="presentation">
      <div className="p-5 rounded-lg notification text-[#19191A] w-[12rem] aspect-square flex flex-col justify-between">
        <div className="flex justify-between items-start mb-5">
          <img src={bar} alt="bar" />
          <img src={checkmark} alt="checkmark" />
        </div>
        <div>
          <p className="font-medium text-sm mb-2">
            We’ll be sending notifications to you here
          </p>

          <div className="flex items-center gap-1 p-2 w-fit rounded-md bg-[#e5e5e67a]">
            <span className="text-[#313233] text-xs font-medium">
              $1,000.00
            </span>
            <span>
              <img src={down_arrow} alt="select" />
            </span>
          </div>
        </div>
      </div>
    </div>,
    <div className="pr-5" onDragStart={handleDragStart} role="presentation">
      <div
        onDragStart={handleDragStart}
        role="presentation"
        className="p-5 rounded-lg notification text-[#19191A] w-[12rem] aspect-square flex flex-col justify-between"
      >
        <div className="flex justify-between items-start mb-5">
          <img src={clock} alt="clock" />
          <img src={checkmark} alt="checkmark" />
        </div>
        <div>
          <p className="font-medium text-sm mb-2">
            Notify me when any wallet dormant for
          </p>

          <div className="flex items-center gap-1 p-2 w-fit rounded-md bg-[#e5e5e67a]">
            <span className="text-[#313233] text-xs font-medium">
              &gt; 30 days
            </span>
            <span>
              <img src={down_arrow} alt="select" />
            </span>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="flex flex-col gap-20 mb-10">
      {sectionData?.map((section_data) => {
        return (
          <section
            key={section_data?.id}
            className={`flex flex-col gap-10 text-[#F2F2F2]  ${
              section_data?.id === 1
                ? "md:flex-row md:w-[90%] md:ml-auto"
                : "md:flex-row-reverse md:w-[80%] md:mx-auto"
            } `}
          >
            <div
              className={`flex-1  w-[60%] md:w-[90%] mx-auto  ${
                section_data?.id === 1
                  ? ""
                  : "flex-col flex items-end text-right"
              }  `}
            >
              <img
                src={section_data?.icon}
                alt="notification"
                className="mb-5"
              />
              <h1 className="text-3xl  mb-5 font-medium ">
                {section_data?.title}
              </h1>
              <p className="text-base opacity-[0.7] leading-5  tracking-wide ">
                {section_data?.text}
              </p>
            </div>
            <div className="flex-1 w-full ">
              {section_data?.id === 1 ? (
                <div className="w-full md:max-w-[25rem] lg:max-w-[15rem] xl:max-w-[25rem] md:ml-auto  relative">
                  <AliceCarousel
                    infinite={true}
                    disableDotsControls
                    disableButtonsControls
                    keyboardNavigation
                    mouseTracking
                    autoPlay
                    animationDuration={4000}
                    items={carousel_items}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      400: {
                        items: 2,
                      },
                      600: {
                        items: 3,
                      },
                      768: {
                        items: 2,
                      },
                      1024: {
                        items: 1,
                      },
                      1200: {
                        items: 2,
                      },
                    }}
                  />

                  {/* left shadow */}
                  <div className=" top-0 bottom-0 left-0 custom_shadow  absolute"></div>
                  <div className=" top-0 bottom-0 right-0 custom_shadow  absolute"></div>
                </div>
              ) : (
                <img
                  src={cohorts}
                  alt="cohorts"
                  className=" w-full md:scale-125"
                />
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Section1and2;
