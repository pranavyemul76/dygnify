exports.ValidationPersonal = (req, res, next) => {
  let checkinput = [
    "firstname",
    "lastname",
    "gender",
    "address",
    "email",
    "age",
    "mobile_no",
  ];
  for (let i = 0; i < checkinput.length; i++) {
    if (i < 3) {
      if (
        /[^a-z^A-Z^\s]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 3) {
      if (
        /[^a-z^0-9^A-Z^\s^@^-^/]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 4) {
      if (
        !/^[a-z A-Z 0-9+_.-]+@[a-z A-Z 0-9.-]+$/.test(
          req.body[checkinput[i]] ||
            req.body[checkinput[i]] === undefined ||
            req.body[checkinput[i]] == ""
        )
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 5) {
      if (
        /[^0-9]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 6) {
      if (
        /[^0-9]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]].toString().length != 10 ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      } else {
        next();
      }
    }
  }
};
exports.ValidationBusiness = (req, res, next) => {
  let checkinput = [
    "firstname",
    "lastname",
    "business_name",
    "business_address",
    "business_email",
    "gst_no",
    "pan_card_no",
  ];
  for (let i = 0; i < checkinput.length; i++) {
    if (i < 3) {
      if (
        /[^a-z^A-Z^\s]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 3) {
      if (
        /[^a-z^0-9^A-Z^@^-^/^\s]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 4) {
      if (
        !/^[a-z A-Z 0-9+_.-]+@[a-z A-Z 0-9.-]+$/.test(
          req.body[checkinput[i]] ||
            req.body[checkinput[i]] === undefined ||
            req.body[checkinput[i]] == ""
        )
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 5) {
      if (
        /[^0-9]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 6 || i === 5) {
      if (
        /[^0-9]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      } else {
        next();
      }
    }
  }
};

exports.ValidationLoan = (req, res, next) => {
  let checkinput = [
    "loan_type",
    "job_title",
    "Use_for",
    "loan_amount",
    "annual_income",
    "loan_tenure",
    "interest_rate",
  ];

  for (let i = 0; i < checkinput.length; i++) {
    if (i < 3) {
      if (
        /[^a-z^A-Z]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        console.log("wrong input");
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i < 5 && i > 3) {
      if (
        /[^0-9]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      }
    } else if (i === 6) {
      if (
        /[^0-9]/.test(req.body[checkinput[i]]) ||
        req.body[checkinput[i]] === undefined ||
        req.body[checkinput[i]] == ""
      ) {
        res.json({ messeage: ` provide valid ${checkinput[i]}` });
        break;
      } else {
        next();
      }
    }
  }
};
