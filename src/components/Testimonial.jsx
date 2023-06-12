// local assests
import testimonial_icon from "../assets/testimonial_icon.svg";

// caroausel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Testimonial = () => {
  // local variables
  const handleDragStart = (e) => e.preventDefault();
  const testimonialData = [
    {
      id: 1,
      name: "Jack F",
      job_title: "Ex Blackrock PM",
      testimonial:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      id: 2,
      name: "Yash P",
      job_title: "Research, 3poch Crypto Hedge Fund",
      testimonial:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },

    {
      id: 3,
      name: "Shiv S",
      job_title: "Co-Founder Magik Labs",
      testimonial:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];

  const items = testimonialData?.map((testimonial_data) => {
    return (
      <div
        key={testimonial_data?.id}
        onDragStart={handleDragStart}
        role="presentation"
        className="pr-5 w-full cursor-grab select-none"
      >
        <div className="bg-white custom_box_shadow_2 p-5 rounded-xl w-full min-h-[160px]  ">
          <div className="flex flex-col items-center gap-2 mb-5">
            <h1 className="text-[#19191A] font-semibold">
              {testimonial_data?.name}
            </h1>
            <h3 className="text-sm text-[#96979A] font-medium text-center">
              {testimonial_data?.job_title}
            </h3>
          </div>

          <p className="font-medium text-[#1D2129] ">
            {testimonial_data?.testimonial}
          </p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <h1 className="text-3xl  mb-5 font-medium text-[#F2F2F2] text-center sm:text-right w-[80%] mx-auto pb-5 border-b border-b-[#e5e5e68a]">
        Testimonials
      </h1>

      <div className="w-[90%] ml-auto flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-center sm:justify-start sm:items-end">
        <img src={testimonial_icon} alt="testimonial icon" className="" />

        <div className=" w-full mt-10 max-w-[25rem] md:max-w-[30rem] lg:max-w-[40rem] ml-auto overflow-hidden ">
          <AliceCarousel
            infinite={true}
            disableDotsControls
            disableButtonsControls
            keyboardNavigation
            mouseTracking
            items={items}
            responsive={{
              0: {
                items: 1,
              },

              1500: {
                items: 2,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
