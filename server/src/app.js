const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const { errorHandler } = require("./controllers/errorController");
const { rateLimitController } = require("./controllers/rateLimitController");
const contactRoutes = require("./routes/contactRoutes");
const keepActiveRoutes = require("./routes/keepActiveRoutes");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(rateLimitController);

app.use("/api/v1/contact", contactRoutes);
app.use(keepActiveRoutes);

app.use(errorHandler);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server  running on port ${PORT}...`));
