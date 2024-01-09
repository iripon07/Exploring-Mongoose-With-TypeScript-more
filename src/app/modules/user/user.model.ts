import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: {
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
  },

  name: {
    firstName: {
      type: String,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  datOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
  },
  presentAddress: {
    tye: String,
  },
  permanentAddress: {
    type: String,
  },
});
const User = model<IUser>("User", userSchema);

export default User;
