import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({role:"admin"})
  console.log(admins);
  return admins
  
})

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
