import productModel from "../model/productModel.js";

const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

const postProducts = async (req, res) => {
  const { name, price, image } = req.body;
  const product = new productModel({ name, price, image });
  await product.save();
  res.json(product);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  await productModel.findByIdAndDelete(id);
  res.json({ message: `${id} -li məhsul silindi` });
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(id, { name, price, image }, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Product update failed", error });
  }
};


export { getProducts, postProducts, deleteProducts, updateProducts };
