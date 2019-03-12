const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    parent_category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    thumbail: {
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
CategorySchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("Category", CategorySchema);
