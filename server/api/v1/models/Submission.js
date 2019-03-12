const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SubmissionSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    challenge: {
      type: Schema.Types.ObjectId,
      ref: "Challenge"
    },
    github_url: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    votes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
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
SubmissionSchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("Submission", SubmissionSchema);
