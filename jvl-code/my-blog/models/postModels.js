import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    created_at: String,
  },
  { toJSON: { virtuals: true } }
);

postSchema.virtual("shortDescription").get(function () {
  return this.description.substring(0, 50) + "...";
});
postSchema.virtual("created_at_formatted").get(function () {
  return changedateFormate(this.created_at);
});

function changedateFormate(date_str) {
  const date = new Date(date_str);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const PostModel = models.Post || model("Post", postSchema);

export default PostModel;
