const mongoose = require("mongoose");
require("dotenv").config();

// Connect MongoDb to Node Application
mongoose
  .connect(process.env.DB_URL)
  .then((data) =>
    console.log(`Database connected Successfully at ${data.connection.host}`)
  )
  .catch((err) => console.log("Database Connection Error", err));
