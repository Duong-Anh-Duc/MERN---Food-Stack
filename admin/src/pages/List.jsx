import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (productId) => {
    const response = await axios.post(`${url}/api/product/remove`, {
      _id: productId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error removing product");
    }
  };

  const EditProduct = async () => {
    try {
      const response = await axios.put(`${url}/api/product/edit/${editId}`, {
        data: editData,
      });

      if (response.data.success) {
        toast.success("Product updated successfully");
        fetchList();
        setEditId(null);
        setEditData({
          name: "",
          description: "",
          price: "",
          category: "",
          image: null,
        });
      } else {
        toast.error("Failed to update product");
      }
    } catch (error) {
      toast.error("Error updating product");
    }
  };

  const handleEditClick = (product) => {
    setEditId(product._id);
    setEditData({
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setEditData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  return (
    <div className="p-4 sm:p-10 box-border w-full bg-white rounded-xl">
      <h4 className="bold-22 uppercase">Products List</h4>
      <div className="overflow-auto mt-5">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
              <th className="p-1 text-left">Product</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Description</th>
              <th className="p-1 text-left">Category</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Edit</th>
              <th className="p-1 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product) => (
              <tr
                key={product._id}
                className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left"
              >
                <td className="p-1">
                  <img
                    src={
                      typeof editData.image === "string" &&
                      editId === product._id
                        ? `${url}/images/` + editData.image
                        : `${url}/images/` + product.image
                    }
                    alt=""
                    className="rounded-lg ring-1 ring-slate-900/5 m-1"
                    height={38}
                    width={38}
                  />
                  {editId === product._id && (
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="mt-2"
                    />
                  )}
                </td>
                <td className="p-1">
                  {editId === product._id ? (
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                      className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
                    />
                  ) : (
                    <div>{product.name}</div>
                  )}
                </td>
                <td className="p-1">
                  {editId === product._id ? (
                    <textarea
                      name="description"
                      value={editData.description}
                      onChange={handleEditChange}
                      className="ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none"
                    />
                  ) : (
                    <div>{product.description}</div>
                  )}
                </td>
                <td className="p-1">
                  {editId === product._id ? (
                    <select
                      name="category"
                      value={editData.category}
                      onChange={handleEditChange}
                      className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
                    >
                      <option value="Curry">Curry</option>
                      <option value="Pizza">Pizza</option>
                      <option value="Rice">Rice</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Fruits">Fruits</option>
                    </select>
                  ) : (
                    <div>{product.category}</div>
                  )}
                </td>
                <td className="p-1">
                  {editId === product._id ? (
                    <input
                      type="number"
                      name="price"
                      value={editData.price}
                      onChange={handleEditChange}
                      className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
                    />
                  ) : (
                    <div>${product.price}</div>
                  )}
                </td>
                <td className="p-1">
                  {editId === product._id ? (
                    <button onClick={EditProduct} className="text-green-500">
                      Save
                    </button>
                  ) : (
                    <FaEdit
                      onClick={() => handleEditClick(product)}
                      className="cursor-pointer"
                    />
                  )}
                </td>
                <td className="p-1">
                  <TbTrash
                    onClick={() => removeProduct(product._id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
