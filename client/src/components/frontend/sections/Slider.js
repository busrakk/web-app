import Carousel from "../Carousel";

const Slider = () => {
  return (
    <div id="home" className="w-screen relative bg-[#fff]">
      <div className="w-full mx-auto flex justify-center items-center">
        {/* <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h2 className="text-fontxxl font-semibold capitalize w-[440px] text-[#202020] self-start">
            Discover a new era of cool
          </h2>
        </div> */}
        <div className="w-full h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Slider;
