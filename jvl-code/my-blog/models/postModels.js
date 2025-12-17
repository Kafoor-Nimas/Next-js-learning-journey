import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const PostModel = model("Post", postSchema);

export default PostModel;
