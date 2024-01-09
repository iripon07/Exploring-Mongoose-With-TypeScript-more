import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { Schema, model } from "mongoose";

const app: Application = express();

//using cors
app.use(cors());
//parse data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting a test data into mongodb

  /*
  step1 Interface 
  step2: Schema
  step3: Model
  step4:Database Query
   */
  // res.send("Hello World!");
  // next()



  const createUserToDB = async () => {
    const user = new User({
      id: 120,
      role: "student",
      password: "123",
      name: {
        firstName: "Mr.",
        middleName: "Batman",
        lastName: "Joker",
      },
      gender: "male",
      email: "abc@gmail.com",
      contactNo: "00012",
      emergencyContactNo: "1233",
      presentAddress: "Gotham",
      permanentAddress: "City",
    });
    await user.save();
    console.log(user);
  };
  createUserToDB()
});

export default app;
