import React from "react";

const AuthCarousel = ({img, desc, title}) => {
  return (
    <div className="!flex flex-col items-center justify-center mb-10 h-full">
      <img
        src={img}
        alt=""
        className="w-[400px] h-[350px]"
      />
      <h3 className="text-fontlg text-white text-center font-bold mt-10">{title}</h3>
      <p className="mt-5 text-fontsm text-white text-center">
        {desc}
      </p>
    </div>
  );
};

export default AuthCarousel;