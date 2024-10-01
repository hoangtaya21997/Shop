const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Chỉ admin mới có quyền lấy tất cả người dùng
router.get('/', protect, admin, getAllUsers);

// Người dùng hoặc admin có thể lấy thông tin của 1 người dùng theo ID
router.get('/:id', protect, getUserById);

// Admin hoặc chính người dùng có thể cập nhật thông tin của mình
router.put('/:id', protect, updateUser);

// Chỉ admin mới có quyền xóa người dùng
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;