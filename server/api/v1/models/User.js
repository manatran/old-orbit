const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    access_token: {
      type: String,
      required: true,
      unique: true
    },
    reputation: {
      type: Number,
      default: 0,
      required: true
    },
    is_admin: {
      type: Boolean,
      default: false,
      required: true
    },
    subscriptions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category"
      }
    ],
    blacklist: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
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
UserSchema.virtual("id").get(() => this._id);

module.exports = mongoose.model("User", UserSchema);
