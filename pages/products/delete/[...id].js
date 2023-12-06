import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState("");
  const { id: productID } = router.query;
  const goBack = () => {
    router.push("/products");
  };

  const deleteProduct = () => {
    axios.delete("/api/products?id=" + productID).then(() => {
      // go to products page
      goBack();
    });
  };

  useEffect(() => {
    axios
      .get("/api/products/?id=" + productID)
      .then((res) => setProductInfo(res.data));
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl text-center">
        Do you want to delete "{productInfo?.title}"?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
