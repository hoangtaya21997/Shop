// models/productModel.js
const mongoose = require('mongoose');

// Hàm để tạo id ngẫu nhiên
const generateId = () => {
  return Math.random().toString(36).substr(2, 9); // Sinh một id ngẫu nhiên
};

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    default: generateId, // Sử dụng hàm tạo id ngẫu nhiên
    unique: true, // Đảm bảo mỗi sản phẩm có id duy nhất
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  notes: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
