import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: 120122,
    role: "student",
    name: {
      firstName: "Mr.",
      middleName: "Batman",
      lastName: "Joker",
    },
    password: "12da3",
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
createUserToDB();
