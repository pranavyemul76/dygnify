const businessData = require("../Modules/Business.js");

exports.business = (req, res) => {
  const businessinfo = new businessData({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gst_no: req.body.gst_no,
    pan_card_no: req.body.pan_card_no,
    business_name: req.body.business_name,
    business_address: req.body.business_address,
    business_email: req.body.business_email,
  });
  businessinfo
    .save()
    .then((response) => {
      res
        .status(200)
        .json({ data: response, messeage: " data saved successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};
