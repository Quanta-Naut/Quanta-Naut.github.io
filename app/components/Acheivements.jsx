import React from "react";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
  dots: false,
  center: true,
  nav: true,
  navText: [
    "<span class='custom-prev-button'>&#8592;</span>", // Custom previous button
    "<span class='custom-next-button'>&#8594;</span>",
  ],
};

const Slider = () => {
  return (
    <div className="felx justify-center items-center">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item lg:w-1/2 mx-8 items-center lg:mx-auto">
          <div className="shadow-[0_20px_50px_rgba(132,_0,_255,_0.4)] border-purple-600 p-4 rounded-xl">
            <p>
              "I have successfully completed a Python basic certification,
              demonstrating my foundational understanding of Python
              programming."
            </p>
            <h2 className="text-xl mt-5">HakerRank</h2>
          </div>
        </div>
        <div className="item lg:w-1/2 mx-8 items-center lg:mx-auto mb-16">
          <div className="shadow-[0_20px_50px_rgba(132,_0,_255,_0.4)] border-purple-600 p-4 rounded-xl mb-10">
            <p>
              "I not only participated but also emerged as the winner in the
              hackathon organized by our college department, demonstrating my
              exceptional problem-solving and coding abilities."
            </p>
            <h2 className="text-xl mt-5">C&IT, REVA Universty</h2>
          </div>
        </div>
        <div className="item lg:w-1/2 mx-8 items-center lg:mx-auto">
          <div className="shadow-[0_20px_50px_rgba(132,_0,_255,_0.4)] border-purple-600 p-5 rounded-xl">
            <p>
              "I enthusiastically participated in Hacktoberfest and successfully
              completed four contributions in just 10 days, showcasing my
              dedication to open source and software development."
            </p>
            <h3 className="text-xl mt-5">HacktoberFest</h3>
          </div>
        </div>
      </OwlCarousel>

      <style jsx global>
        {`
          .custom-prev-button,
          .custom-next-button {
            font-size: 2rem;
            color: #9333EA;
            border: 1px solid #9333EA;
            padding-right: 5px;
            padding-left: 5px;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 10px;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s, color 0.3s;
          }
          .owl-nav {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .custom-prev-button:hover,
          .custom-next-button:hover {
            background-color: #21042e;
            color: #C084FC;
          }
        `}
      </style>
    </div>
  );
}
const Section = () => {
    return (
      <div id="awards">
        <div className="flex flex-col items-center justify-center mt-28 mb-20">
          <h2 className="text-4xl font-bold">Acheivements</h2>
        </div>
        <Slider />
      </div>
    );
};

export default Section;
