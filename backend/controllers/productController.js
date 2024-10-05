// controllers/productController.js
const Product = require('../models/product');


const getProducts = async (req, res) => {
  const { limit = 10, page = 1 } = req.query; 

  try {
    const products = await Product.find({})
      .limit(Number(limit)) // Giới hạn số sản phẩm trả về
      .skip((Number(page) - 1) * Number(limit)); // Bỏ qua số sản phẩm dựa trên trang hiện tại
    const totalProducts = await Product.countDocuments();

    res.json({
      success: true,
      code: 200,
      data: products,
      totalItems: totalProducts, 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

// Thêm sản phẩm mới
const addProduct = async (req, res) => {
  const { name, quantity = 0, notes = '', price, imageUrl = '' } = req.body;

  if (!name || !price) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  try {
    const id = Math.random().toString(36).substr(2, 9);
    const newProduct = new Product({
      name,
      quantity,
      notes,
      price,
      imageUrl,
      id,
    });
    
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error 123', error });
  }
};

// Sửa sản phẩm
const updateProduct = async (req, res) => {
  const { id } = req.params; // Assuming you're passing `id` from params
  const { name, quantity, notes, price, imageUrl } = req.body;

  try {
    const product = await Product.findOne({ id });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    const updatedProduct = await Product.findOneAndUpdate(
      { id },
      { name, quantity, notes, price, imageUrl },
      { new: true }
    );
    res.json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

// Xóa sản phẩm
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    await Product.findByIdAndDelete(id);
    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};


const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ id });

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

const searchProducts = async (req, res) => {
  const { name, limit = 10, page = 1 } = req.query;

  try {
    const products = await Product.find({
      name: { $regex: name, $options: 'i' }
    })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const totalProducts = await Product.countDocuments({
      name: { $regex: name, $options: 'i' } 
    });

    res.json({
      success: true,
      data: products,
      totalItems: totalProducts,
    });
    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  searchProducts,
};
