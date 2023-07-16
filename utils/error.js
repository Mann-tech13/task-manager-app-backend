const handleError = (err, res) => {
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
  return;
};

module.exports = handleError;
