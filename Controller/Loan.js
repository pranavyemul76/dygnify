const loanData = require("../Modules/Loan");

exports.loan = (req, res) => {
  console.log(req.body);
  const loaninfo = new loanData({
    loan_type: req.body.loan_type,
    loan_amount: req.body.loan_amount,
    annual_income: req.body.annual_income,
    loan_tenure: req.body.loan_tenure,
    interest_rate: req.body.interest_rate,
    job_title: req.body.job_title,
    Use_for: req.body.Use_for,
  });
  loaninfo
    .save()
    .then((response) => {
      console.log(response);
      res
        .status(200)
        .json({ data: response, messeage: " data saved successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};
