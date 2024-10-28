const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { errorHandler } = require("./controllers/errorController");
const { rateLimitController } = require("./controllers/rateLimitController");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

app.use(rateLimitController);

app.use("/api/contact", contactRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server  running on port ${PORT}...`));
