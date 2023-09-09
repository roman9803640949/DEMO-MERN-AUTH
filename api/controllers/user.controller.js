// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
export const authUser = async (req, res) => {
  res.status(200).json({ message: "Auth User" });
};

// @desc    Register a new user
// route    POST /api/users
// @access  Public
export const registerUser = async (req, res) => {
  res.status(200).json({ message: "Register User" });
};

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
export const logoutUser = async (req, res) => {
  res.status(200).json({ message: "Logout User" });
};

// @desc    get user profile
// route    GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
};

// @desc    get user profile
// route    PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
};
