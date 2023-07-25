const UserSchema = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const handleError = require("../utils/error");

const login = async (req, res) => {
  try {
  } catch (error) {}
};
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: 'Email already registered' });
    }
    const encode = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, encode);
    const user = await UserSchema.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.status(200).json(user);
    res.send(user);
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = { login, register };
