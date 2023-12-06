import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm(props) {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [price, setPrice] = useState(props.price || "");
  const _id = props?._id;

  const router = useRouter();
  console.log({ title, description, price });
  async function SaveProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    // update product info or create new product
    if (_id) {
      // update product info in database
      await axios.put("api/products", { ...data, _id });
    } else {
      // create a new product in database
      await axios.post("/api/products", data);
    }
    // redirect to products page after request if done
    router.push("/products");
  }

  return (
    <form onSubmit={(e) => SaveProduct(e)}>
      <label>Product Name</label>
      <input
        placeholder="Product Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        placeholder="Product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Price (ZMW Kwacha)</label>
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="btn-primary" type="submit">
        Save
      </button>
    </form>
  );
}
