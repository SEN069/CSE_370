const productModel = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const { search, sort } = req.query;

    const products = await productModel.getProducts(search, sort);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProducts };