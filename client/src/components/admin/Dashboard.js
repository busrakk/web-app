import React from "react";
import { BsPeople } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlineDollarCircle, AiOutlineSolution } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <div className="bg-blue-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <BsPeople
              size={24}
              className=" text-blue-800 transform transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="text-right">
            <p className="text-2xl">1,257</p>
            <p>Kullanıcılar</p>
          </div>
        </div>
        <div className="bg-orange-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <MdOutlineFastfood
              size={24}
              className="text-orange-800 transform transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="text-right">
            <p className="text-2xl">557</p>
            <p>Yemekler</p>
          </div>
        </div>
        <div className="bg-green-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <AiOutlineSolution
              size={24}
              className=" text-green-800 transform transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="text-right">
            <p className="text-2xl">$11,257</p>
            <p>Siparişler</p>
          </div>
        </div>
        <div className="bg-pink-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-pink-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <AiOutlineDollarCircle
              size={24}
              className=" text-pink-800 transform transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="text-right">
            <p className="text-2xl">$75,257</p>
            <p>Toplam Kazanç</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
