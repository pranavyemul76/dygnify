const personalData = require("../Modules/Personal");

exports.personal = (req, res) => {
  const personalinfo = new personalData({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    mobile_no: req.body.mobile_no,
    address: req.body.address,
    email: req.body.email,
    gender: req.body.gender,
  });
  personalinfo
    .save()
    .then((response) => {
      res.json({ data: response, messeage: " data saved successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};
