const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

//Database Connect
async function bootstrap() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/practice-mongoose`);
    console.log(`Database connection successfully`);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {}
}

bootstrap();
app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});


