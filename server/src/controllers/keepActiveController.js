const { asyncHandler } = require("../utils/asyncHandler");

const getActiveStatus = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "App is active",
  });
});

module.exports = { getActiveStatus };
