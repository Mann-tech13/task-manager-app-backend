const UserSchema = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleError = require("../utils/extend");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({email}).lean();
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    const auth = await bcrypt.compare(password, user.password);
    if(!auth){
      return res.status(401).json({message: "Invalid credentials"});
    }
    
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '24h'
    });

    res.status(200).json({ message: "Login successful", accessToken });
  } catch (error) {
    handleError(error, res);
  }
};
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserSchema.findOne({ email });
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
  } catch (error) {
    handleError(error, res);
  }
};

module.exports = { login, register };
