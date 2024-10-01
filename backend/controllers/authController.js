const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Tạo token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Đăng ký
const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(200).json({success: false, message: 'User already exists'});
    }

    const user = await User.create({ username, password, role });
    if (user) {
      res.status(201).json({
        success: true, 
        _id: user._id,
        username: user.username,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(200).json({success: false,  message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({success: false,  message: 'Server error', error });
  }
};

// Đăng nhập
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true, 
        code: 200,
        _id: user._id,
        username: user.username,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(200).json({success: false, code: 401, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(200).json({success: false, code: 500,  message: 'Server error', error });
  }
};

module.exports = { registerUser, loginUser };
