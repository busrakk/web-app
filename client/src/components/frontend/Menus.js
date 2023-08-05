import React from "react";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={28} />
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-16 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={28} />
    </button>
  );
}

const Menus = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mx-auto xl:px-40 md:pt-8">
      <Slider className="md:-mx-2 flex justify-center items-center" {...settings}>
        <div className="space-x-4">
          <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-96"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div className="py-5 text-center">
              <div
                className="block text-xl font-bold text-gray-800"
                role="link"
              >
                John Doe
              </div>
              <span className="text-sm text-gray-700">Software Engineer</span>
            </div>
          </div>
        </div>
        <div className="space-x-4 mr-4">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-96"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div className="py-5 text-center">
              <div
                className="block text-xl font-bold text-gray-800"
                role="link"
              >
                John Doe
              </div>
              <span className="text-sm text-gray-700">Software Engineer</span>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-96"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div className="py-5 text-center">
              <div
                className="block text-xl font-bold text-gray-800"
                role="link"
              >
                John Doe
              </div>
              <span className="text-sm text-gray-700">Software Engineer</span>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-96"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div className="py-5 text-center">
              <div
                className="block text-xl font-bold text-gray-800"
                role="link"
              >
                John Doe
              </div>
              <span className="text-sm text-gray-700">Software Engineer</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Menus;
