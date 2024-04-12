const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGO_INITDB_HOST}:27017/chalkboard?authSource=admin`,
      {
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
      }
    );

    const app = express();
    app.use(express.json());
    app.use("/api/v1/notes", require("./routes/notes.routes"));
    app.listen(5000, () => console.log(`Server started on port 5000`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
