const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RevisionSchema = new Schema(
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
    accepted: {
      type: Boolean,
      default: false,
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

// Virtuals
RevisionSchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("Revision", RevisionSchema);
