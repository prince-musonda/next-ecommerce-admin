import Layout from "@/components/layout";
import ProductForm from "@/components/product_form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingAnimation from "@/components/loading_animation";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(false);
  const router = useRouter();
  // get product info to prefill the product form with
  useEffect(() => {
    setIsLoadingData(true);
    const productID = router.query.id;
    axios.get(`/api/products?id=${productID}`).then((res) => {
      setIsLoadingData(false);
      setProductInfo(res.data);
    });
  }, []);

  return (
    <Layout>
      {isLoadingData ? <LoadingAnimation /> : <ProductForm {...productInfo} />}
    </Layout>
  );
}
