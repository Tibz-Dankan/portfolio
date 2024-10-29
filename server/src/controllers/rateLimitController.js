const { rateLimit } = require("express-rate-limit");

const rateLimitController = rateLimit({
  windowMs: 60 * 1000,
  limit: 15,
  message: "You have made too many requests, try again later!",
  legacyHeaders: true,
});

module.exports = { rateLimitController };
