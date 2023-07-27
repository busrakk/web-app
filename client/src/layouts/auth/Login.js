import { Link } from "react-router-dom";
import Logo from "../../components/elements/Logo";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import { Carousel } from "antd";
import AuthCarousel from "../../components/auth/AuthCarousel";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";

const Login = () => {
  return (
    <div className="h-screen xl:mx-48">
      <div className="flex justify-between h-full">
        <div className="xl:w-1/3 lg:w-2/5 md:w-1/2 md:flex hidden  h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6" autoplay>
                <AuthCarousel
                  img={slider1}
                />
                <AuthCarousel
                  img={slider2}
                />
                <AuthCarousel
                  img={slider3}
                />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">
            <Logo />
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col bg-white px-4 sm:px-2 md:px-4 lg:px-6 py-2 rounded-md w-full max-w-md">
              <div className="inline-flex justify-center">
                <div className="inline-flex flex-row items-center">
                  <span className="leading-2 text-gray-800 text-fontmd font-bold ml-1 uppercase">
                    Merhaba,
                  </span>
                </div>
              </div>

              <div className="text-fontsm sm:text-base text-gray-600 my-4">
                Welly’s giriş yap veya hesap oluştur, yemekleri keşfet!
              </div>
              <div className="rounded-md bg-white w-full max-w-sm sm:max-w-md border border-gray-200 shadow-md px-4 py-4 sm:p-8">
                <form>
                  <div className="flex flex-col mb-6">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      E-Posta Adresi:
                    </label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <MdOutlineAlternateEmail size={20} />
                      </div>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                        placeholder="E-Posta Adresi"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label
                      htmlFor="password"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      Şifre:
                    </label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span>
                          <AiOutlineLock size={20} />
                        </span>
                      </div>

                      <input
                        id="password"
                        type="password"
                        name="password"
                        autoComplete="on"
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                        placeholder="Şifre"
                      />
                    </div>
                  </div>

                  <div className="flex w-full">
                    <button
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 rounded py-2 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 uppercase">GİRİŞ Yap</span>
                      <span className="font-bold">
                        <FiArrowRightCircle size={20} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/register"
              //target="_blank"
              className="inline-flex items-center font-bold text-indigo-500 hover:text-indigo-700 text-sm text-center"
            >
              <span>
                <HiOutlineUserAdd size={20} />
              </span>
              <span className="ml-2">Hesabınız yok mu?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
