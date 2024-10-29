const AppError = require("../utils/error");
const Email = require("../utils/email");
const { asyncHandler } = require("../utils/asyncHandler");

const postContactMessage = asyncHandler(async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (!name || !email || !message) {
    return next(new AppError("Missing name/email/message!", 400));
  }
  if (!email.contains("@")) {
    return next(new AppError("Please provide a valid email!", 400));
  }

  await new Email(email, subject).sendContactUs(name, email, message);

  res.status(200).json({ message: "Your message has been submitted!" });
});

module.exports = { postContactMessage };
