import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    require: [true, "prompt is requierd"],
  },
  tag: {
    type: String,
    require: [true, "tag is requierd"],
  },
});

const Prompt = models.Prompts || model("Prompts", promptSchema);
export default Prompt;
