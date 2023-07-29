import React, { useState } from "react";
import swal from "sweetalert";
import {
  categoryListApi,
  categoryDeleteApi,
} from "../../../service/serviceApi";
import useDelayCallback from "../../helpers/useDelayCallback";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import Add from "./Add";
import Update from "./Update";

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  useDelayCallback(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    categoryListApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setCategoryList(res.data.data);
        }
      } else {
        setCategoryList([]);
      }
    });
  };

  const removeCategory = (removeId) => {
    const newCategory = categoryList.filter(
      (category) => category.id !== removeId
    );
    setCategoryList(newCategory);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    swal({
      title: "Emin misin?",
      text: "Bu bilgileri bir kez sildikten sonra kurtaramazsınız!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        categoryDeleteApi(id).then((res) => {
          if (res.data.success) {
            if (res.data.status === "success") {
              swal({
                title: "Success",
                text: res.data.message,
                icon: "success",
                buttons: false,
                timer: 1500,
              });
              removeCategory(id);
            }
          } else {
            swal({
              title: "Error",
              text: res.data.message,
              icon: "error",
              timer: 2000,
              buttons: false,
            });
          }
        });
      } else {
      }
    });
  };

  const handleModal = (newCategoryId = 0) => {
    setShowUpdate(true)
    setCategoryId(newCategoryId);
  };

  const renderTable = () => {
    let view = [];
    categoryList.map((item) => {
      view.push(
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4">
            {item.status === 1 ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                Inactive
              </span>
            )}
          </td>
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
              <BiEditAlt
                onClick={() => handleModal(item.id)}
                className="h-6 w-6 hover:text-blue-600"
              />
              <MdDeleteOutline
                onClick={(e) => handleDelete(e, item.id)}
                className="h-6 w-6 hover:text-red-600"
              />
            </div>
          </td>
        </tr>
      );
      return view;
    });
    if (view.length === 0) {
      return (
        <tr>
          <td colSpan={4} className="text-center p-4">
            No data found!
          </td>
        </tr>
      );
    } else {
      return view;
    }
  };

  return (
    <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
      <div className="mt-4 text-fontlg font-semibold flex justify-between md:mx-40 mx-10">
        <span>Kategoriler</span>
        <button
          onClick={() => setShow(true)}
          className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-600 rounded-lg md:text-fontmd text-fontsm hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-80"
        >
          <MdAddCircleOutline size={28} className="w-5 h-5 mx-1" />
          <span className="mx-1">Ekle</span>
        </button>
      </div>
      {show && <Add setShow={setShow} />}
      {showUpdate && <Update categoryId={categoryId} setShowUpdate={setShowUpdate} />}

      <div className="flex justify-center">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-3/4">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Kategori Adı
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Durum
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {isLoading && (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    <div>
                      <span>Loading...</span>
                    </div>
                  </td>
                </tr>
              )}
              {!isLoading && renderTable()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
