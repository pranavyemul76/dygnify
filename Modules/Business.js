const mongoose = require("mongoose");

const buinsessSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gst_no: {
    type: Number,
    required: true,
  },
  pan_card_no: {
    type: Number,

    required: true,
  },
  business_name: {
    type: String,
    required: true,
  },
  business_address: {
    type: String,
    required: true,
  },
  business_email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("buinsess", buinsessSchema);
