const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    domain: { type: mongoose.SchemaTypes.ObjectId, require: true, ref:"domain" },
    company: { type: mongoose.SchemaTypes.ObjectId, require: true, ref:"companies" },
    new_registration_fee: { type: mongoose.SchemaTypes.Decimal128 },
    new_registration_bedges: { type: [String] },
    renewal_fee: { type: mongoose.SchemaTypes.Decimal128 },
    renewal_bedges: { type: [String] },
    transfer_fee: { type: mongoose.SchemaTypes.Decimal128 },
    transfer_bedges: { type: [String] },
    is_active: { type: Boolean, default: true },
    currency: { type: String,default: "USD" },
    language: { type: String,default: "EN" },
    date: { type: String,default: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdaAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Prices extends mongoose.Model {}

schema.loadClass(Prices);
module.exports = mongoose.model("prices", schema);
