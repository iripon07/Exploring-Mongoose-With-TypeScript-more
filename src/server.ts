import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//Database Connect
async function main() {
  try {
    await mongoose.connect(`mongodb://0.0.0.0:27017/practice-mongoose`);
    console.log(`Database connection successfully`);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}

main();
