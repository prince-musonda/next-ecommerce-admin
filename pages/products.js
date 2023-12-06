import Layout from "@/components/layout";
import LoadingAnimation from "@/components/loading_animation";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState([false]);

  useEffect(() => {
    setIsLoadingData(true);
    axios
      .get("/api/products")
      .then((res) => {
        setIsLoadingData(false);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Link
        href="/products/new"
        className="bg-blue-900 text-white py-1 px-2 rounded-md"
      >
        Add New Product
      </Link>
      {isLoadingData ? (
        <LoadingAnimation />
      ) : (
        <table className="basic">
          <thead>
            <tr>
              <td>Product Name</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.title}</td>
                <td>
                  {/* edit product button */}
                  <Link href={`/products/edit/${product._id}`}> Edit</Link>
                  {/* delete product button */}
                  <Link href={`/products/delete/${product._id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}
