import React, { useEffect, useState } from "react";
import Data from "../Data";
import Products from "../../Products/Products";

export default function AddData() {
  const [newProduct, setNewProduct] = useState({});
  const [formData, setFormData] = useState({
    count: 0,
    isSale: false,
    category: "",
    name: "",
    price: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct(formData);
    setFormData({ count: 0, isSale: false, category: "", name: "", price: "" });
  };
  //   const add=(product)=>{

  //   }
  useEffect(() => {}, []);
//   console.log(newProduct);

  return (
    <>
      <form action="" className="p-3 m-3 " onSubmit={handleSubmit}>
        <label htmlFor="Price">Name </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="name">Category </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-control"
        />

        <label htmlFor="Price">Price </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="form-control"
        />

        <label htmlFor="count">Number Of Products In stock</label>
        <input
          type="number"
          name="count"
          value={formData.count}
          onChange={handleChange}
          className="form-control "
        />

         <input
          type="checkbox"
          name="isSale"
          value={formData.isSale}
          onChange={handleChange}
          className="form-check-input my-3"
        />
        <label htmlFor="isSale" className="form-check-label px-2 my-3">
          Is Sale{" "}
        </label>

        <button type="submit" className="btn btn-outline-info">
          Add!
        </button>
      </form>
    <Products newData={newProduct} />
    </>
  );
}
