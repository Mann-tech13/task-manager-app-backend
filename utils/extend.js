const jwt = require('jsonwebtoken');

const handleError = (err, res) => {
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
  return;
};

const validateAndGetUserIdFromAccessToken = (accessToken) => {
  try {
    // console.log(accessToken);
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    const userId = decodedToken.userId;
    return userId;
  } catch (error) {
    throw new Error('Invalid access token');
  }
}

module.exports = {handleError, validateAndGetUserIdFromAccessToken};
