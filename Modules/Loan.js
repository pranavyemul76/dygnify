const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loan_type: {
    type: String,
    required: true,
  },
  loan_amount: {
    type: Number,
    required: true,
  },
  annual_income: {
    type: Number,
    required: true,
  },
  loan_tenure: {
    type: Number,

    required: true,
  },
  interest_rate: {
    type: Number,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  Use_for: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("loan", loanSchema);
