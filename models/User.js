import mongoose from "mongoose";
import passportLocalmongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookID: Number,
  githubID: Number,
});

UserSchema.plugin(passportLocalmongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);
export default model;
