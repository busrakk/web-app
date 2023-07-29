import React from "react";
import { Link } from "react-router-dom";
import { BiSolidShow, BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";

const Users = () => {
  return (
    <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
      <div className="mt-4 text-fontlg font-semibold flex justify-between md:mx-24 mx-10">
        <span>Kullanıcılar</span>
        <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-600 rounded-lg md:text-fontmd text-fontsm hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-80">
          <MdAddCircleOutline size={28} className="w-5 h-5 mx-1" />
          <span className="mx-1">Ekle</span>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-5/6">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Kullanıcı Adı
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Durum
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Rol
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">Product Designer</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">Product Designer</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <Link to="/#">
                      <BiSolidShow className="h-6 w-6 hover:text-violet-600" />
                    </Link>
                    <Link to="/#">
                      <BiEditAlt className="h-6 w-6 hover:text-blue-600" />
                    </Link>
                    <Link to="/#">
                      <MdDeleteOutline className="h-6 w-6 hover:text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
