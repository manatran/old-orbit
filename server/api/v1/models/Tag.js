const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TagSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
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
TagSchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("Tag", TagSchema);
