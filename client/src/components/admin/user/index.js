import React, { useState } from "react";
import swal from "sweetalert";
import { userListApi, userDeleteApi } from "../../../service/serviceApi";
import useDelayCallback from "../../helpers/useDelayCallback";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Update from "./Update";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [userId, setUserId] = useState(0);

  useDelayCallback(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    userListApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setUserList(res.data.data);
        }
      } else {
        setUserList([]);
      }
    });
  };

  const removeUser = (removeId) => {
    const newUser = userList.filter((user) => user.id !== removeId);
    setUserList(newUser);
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
        userDeleteApi(id).then((res) => {
          if (res.data.success) {
            if (res.data.status === "success") {
              swal({
                title: "Success",
                text: res.data.message,
                icon: "success",
                buttons: false,
                timer: 1500,
              });
              removeUser(id);
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

  const handleModal = (newUserId = 0) => {
    setShowUpdate(true);
    setUserId(newUserId);
  };

  const renderTable = () => {
    let view = [];
    userList.map((item) => {
      view.push(
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4 hidden md:block">
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
          <td className="px-6 py-4">{item.role_as === 1 ? "Admin" : "User"}</td>
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
      <div className="mt-4 text-fontlg font-semibold flex justify-between md:mx-24 mx-10">
        <span>Kullanıcılar</span>
      </div>
      {showUpdate && <Update userId={userId} setShowUpdate={setShowUpdate} />}
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-5/6">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Kullanıcı Adı
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 hidden md:flex"
                >
                  Durum
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                  Rol
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
                    <span>Loading..</span>
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

export default Users;
