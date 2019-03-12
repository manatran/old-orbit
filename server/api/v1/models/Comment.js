const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: {
      type: String,
      required: true
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    votes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

// Virtuals
CommentSchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("Comment", CommentSchema);
