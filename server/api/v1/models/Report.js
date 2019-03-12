const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReportSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: {
      type: String
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: true
    },
    resolved_by: {
      type: Schema.Types.ObjectId,
      ref: "User"
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
ReportSchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("Report", ReportSchema);
