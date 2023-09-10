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
  const { name, email, password } = req.body;
  const userExist = User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
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
