const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  role: String,
  industry_id: { type: Schema.Types.ObjectId, ref: "Industry" },
  profile_pic: String,
  badge_level: String,
});

module.exports = mongoose.model("User", userSchema);

