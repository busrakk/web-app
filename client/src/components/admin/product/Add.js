import React, { useState } from "react";
import swal from "sweetalert";
import Select from "react-select";
import {
  productSaveApi,
  productDetailsApi,
  productUpdateApi,
} from "../../../service/serviceApi";
import useDelayCallback from "../../helpers/useDelayCallback";

const Add = (props) => {
  const initialData = {
    category: "",
    name: "",
    price: "",
    description: "",
    status: 1,
    featured: 0,
    image: "",
    error_list: [],
  };

  const DEFAULT_CATEGORY = { label: "Kategori Seç", value: "" };
  const [productInput, setProductInput] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  //   const [picture, setPicture] = useState([]);

  //   const handleImage = (e) => {
  //     setPicture({ image: e.target.files[0] });
  //   };

  useDelayCallback(() => {
    if (props.productId !== 0) {
      loadData();
    } else {
      setLoader(false);
    }
  }, []);

  const loadData = () => {
    productDetailsApi({ id: props.productId })
      .then((res) => {
        if (res.data.success) {
          if (res.data.status === "success") {
            const tempData = {
              name: res.data.data.name,
              price: res.data.data.price,
              description: res.data.data.description,
              status: res.data.data.status,
              featured: res.data.data.featured,
              image: res.data.data.image,
            };
            setProductInput({ ...productInput, ...tempData });
            let i = 0;
            while (i < props.categoryList.length) {
              if (props.categoryList[i].value === res.data.data.category_id) {
                setSelectedCategory(props.categoryList[i]);
              }
              i++;
            }
          }
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log("something is wrong" + error);
      });
  };

  const handleInput = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleUpdate = (formData) => {
    productUpdateApi(props.productId, formData).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          swal({
            title: "Success",
            text: res.data.message,
            icon: "success",
            timer: 2000,
            buttons: false,
          });
          props.setShow(false);
        }
      } else {
        if (res.data.status === "validation-error") {
          setProductInput({ ...productInput, error_list: res.data.errors });
        } else {
          swal({
            title: "Error",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      }
      setIsLoading(false);
    });
  };

  const handleCreate = (formData) => {
    productSaveApi(formData).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          swal({
            title: "Success",
            text: res.data.message,
            icon: "success",
            timer: 2000,
            buttons: false,
          });
          props.setShow(false);
        }
      } else {
        if (res.data.status === "validation-error") {
          setProductInput({ ...productInput, error_list: res.data.errors });
        } else {
          swal({
            title: "Error",
            text: res.data.message,
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      }
      setIsLoading(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProductInput({ ...productInput, error_list: [] });

    const formData = new FormData();
    formData.append("image", productInput.image);
    formData.append("category", selectedCategory.value);
    formData.append("name", productInput.name);
    formData.append("description", productInput.description);
    formData.append("price", productInput.price);
    formData.append("featured", productInput.featured);
    formData.append("status", productInput.status);

    if (props.productId !== 0) {
      handleUpdate(formData);
    } else {
      handleCreate(formData);
    }
  };

  return (
    <div className="fixed z-0 inset-x-0 top-14 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {loader === true ? (
        <div className="bg-white px-6 py-4 p-2 rounded">Loading</div>
      ) : (
        <div className="p-2 rounded">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-3/4">
              {isLoading === true ? (
                <div className="bg-white px-6 py-4">Loading</div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="bg-white px-6 py-4 overflow-auto"
                >
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="category"
                      className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                    >
                      Ürün Kategorisi:
                    </label>
                    <Select
                      options={props.categoryList}
                      onChange={setSelectedCategory}
                      value={selectedCategory}
                      className="text-fontxs sm:text-fontsm placeholder-gray-500 rounded-lg w-full py-2 focus:outline-none focus:border-indigo-400"
                    />
                    <span className="text-red-500">
                      {productInput.error_list.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4">
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="name"
                        className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                      >
                        Ürün Adı:
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="text-fontxs sm:text-fontsm placeholder-gray-500 pl-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                        placeholder="Ürün Adı"
                        onChange={handleInput}
                        value={productInput.name}
                        name="name"
                        required
                      />
                      <span className="text-red-500">
                        {productInput.error_list.name}
                      </span>
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="price"
                        className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                      >
                        Ürün Fiyatı:
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="text-fontxs sm:text-fontsm placeholder-gray-500 pl-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                        placeholder="Ürün Fiyatı"
                        onChange={handleInput}
                        value={productInput.price}
                        name="price"
                        required
                      />
                      <span className="text-red-500">
                        {productInput.error_list.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="description"
                      className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                    >
                      Ürün Tanımı:
                    </label>
                    <textarea
                      id="name"
                      type="text"
                      className="text-fontxs sm:text-fontsm placeholder-gray-500 pl-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                      placeholder="Ürün Tanımı"
                      onChange={handleInput}
                      value={productInput.description}
                      name="description"
                    ></textarea>
                    <span className="text-red-500">
                      {productInput.error_list.description}
                    </span>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="image"
                      className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                    >
                      Ürün Resmi:
                    </label>
                    <input
                      type="text"
                      className="text-fontxs sm:text-fontsm placeholder-gray-500 pl-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                      placeholder="Ürün Resmi"
                      onChange={handleInput}
                      value={productInput.image}
                      name="image"
                    />
                    <span className="text-red-500">
                      {productInput.error_list.image}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4">
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="featured"
                        className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                      >
                        Öne Çıkarma:
                      </label>
                      <select
                        id="featured"
                        name="featured"
                        onChange={handleInput}
                        value={productInput.featured}
                        className="text-fontxs sm:text-fontsm placeholder-gray-500 pl-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                      >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="status"
                        className="mb-1 text-fontxs sm:text-fontsm tracking-wide text-gray-600"
                      >
                        Durum:
                      </label>
                      <select
                        id="status"
                        name="status"
                        onChange={handleInput}
                        value={productInput.status}
                        className="text-fontxs sm:text-fontsm placeholder-gray-500 pl-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
                      >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => props.setShow(false)} // Close the form
                      className="mr-2 px-4 py-2 text-fontsm font-medium tracking-wide text-gray-600 capitalize transition-colors duration-300 transform bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                    >
                      İptal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-fontsm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-600 rounded-lg md:text-fontmd hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-80"
                    >
                      {props.productId !== 0 ? "Güncelle" : "Ekle"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Add;
