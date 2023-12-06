import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handler(req, res) {
  await mongooseConnect();

  // get products from database if request is "get request"
  if (req.method == "GET") {
    // find single product if request contains id query parameter
    if (req.query.id) {
      return res.status(200).json(await Product.findOne({ _id: req.query.id }));
    }
    // else return all available products in db
    const products = await Product.find();
    console.log(products);
    res.status(200).json(products);
  }

  //  if request is a post request
  //  then add the new product to database
  if (req.method == "POST") {
    // create new product
    const { title, description, price } = req.body;
    const productDocument = await Product.create({ title, description, price });
    return res.status(200).json(productDocument);
  }

  if (req.method == "PUT") {
    // update product info
    const { title, description, price } = req.body;
    const productDocument = await Product.updateOne(
      { _id: productData._id },
      { title, description, price }
    );
    res.status(200).json(productDocument);
  }

  if (req.method == "DELETE") {
    // delete a product from database.
    // Get product Id
    const productID = req.query.id;
    if (productID) {
      //remove from database
      await Product.deleteOne({ _id: productID });
      return res.status(200).json({ status: "success" });
    } else {
      res
        .status(200)
        .json({ status: "failed", message: "request missing product ID" });
    }
  }
}
