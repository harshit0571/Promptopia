import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exists"],
    require: [true, "*email required"],
  },
  username: {
    type: String,
    unique: [true, "username already exists"],
    require: [true, "*username required"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
