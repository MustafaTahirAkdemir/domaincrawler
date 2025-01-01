const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    domain: { type: String, require: true, unique: true },
    domain_type: { type: String, default: "-"},
    features: { type: [String], default: [] },



    is_active: { type: Boolean, default: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdaAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Domains extends mongoose.Model {}

schema.loadClass(Domains);
module.exports = mongoose.model("domains", schema);
