import bcrypt from "bcrypt";
import User from "./models/User.js";
import connectToDB from "./db/AutoDB.js";

async function createAdmin() {
  try {
    connectToDB();
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    await newUser.save();
    console.log("User created successfully");
  } catch (error) {
    console.log(error);
  }
}
createAdmin();
