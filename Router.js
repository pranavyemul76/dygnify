const express = require("express");
const validation = require("./Controller/Middleware");
const route = express.Router();

const personalController = require("./Controller/Personal");
const businessController = require("./Controller/Business");
const loanController = require("./Controller/Loan");
route.post(
  "/personal",
  validation.ValidationPersonal,
  personalController.personal
);
route.post(
  "/business",
  validation.ValidationBusiness,
  businessController.business
);
route.post("/loan", validation.ValidationLoan, loanController.loan);

module.exports = route;
