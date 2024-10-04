// routes/productRoutes.js
const express = require('express');
const { getProducts,getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware'); // Middleware để kiểm tra quyền truy cập

const router = express.Router();

// Lấy danh sách sản phẩm
router.get('/', protect, getProducts);

router.get('/:id', protect, getProductById);

// Thêm sản phẩm mới (chỉ admin)
router.post('/', protect, admin, addProduct);

// Sửa sản phẩm (chỉ admin)
router.put('/:id', protect, admin, updateProduct);

// Xóa sản phẩm (chỉ admin)
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;