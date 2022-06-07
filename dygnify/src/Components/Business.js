import React, { useState } from "react";
import Styles from "../Styles/Home.module.css";
import axios from "axios";
function Business() {
  const [businessData, setbusinessData] = useState({});
  const [responsemessege, setmessege] = React.useState(false);
  const handleBusinessDeatils = (event) => {
    event.preventDefault();

    setmessege(false);
    axios({
      url: "/business",
      method: "POST",
      data: {
        firstname: businessData.Firstname,
        lastname: businessData.Lastname,
        gst_no: businessData.GST_no,
        pan_card_no: businessData.Pan_card_no,
        business_name: businessData.Business_name,
        business_address: businessData.address,
        business_email: businessData.email,
      },
    })
      .then((res) => {
        setmessege(res.data.messeage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const businessInputData = (event) => {
    businessData[event.target.name] = event.target.value;
  };
  return (
    <div>
      <div className={Styles.formslayout}>
        <form onSubmit={handleBusinessDeatils}>
          <div>
            <h4 style={{ textAlign: "center" }}>Business Details</h4>
          </div>
          {responsemessege && (
            <div>
              <h3 style={{ textAlign: "center", color: "orange" }}>
                {responsemessege}
              </h3>
            </div>
          )}
          <div>
            <div
              style={{
                marginLeft: "10px",
                marginBottom: "10px",
              }}
            >
              Business Owner Details
            </div>
            <div className={Styles.inputlayout}>
              <label>firstname</label>
              <input
                type="text"
                className="form-control"
                id="Firstname"
                name="Firstname"
                onChange={(e) => businessInputData(e)}
              />
            </div>
            <div className={Styles.inputlayout}>
              <label>last name</label>
              <input
                type="text"
                className="form-control"
                id="Lastname"
                name="Lastname"
                onChange={(e) => businessInputData(e)}
              />
            </div>
            <div className={Styles.inputlayout}>
              <label>GST no</label>
              <input
                type="number"
                className="form-control"
                id="GST_no"
                name="GST_no"
                onChange={(e) => businessInputData(e)}
              />
            </div>
            <div className={Styles.inputlayout}>
              <label>PAN Card no</label>
              <input
                type="number"
                className="form-control"
                id="PAN_card_no"
                name="Pan_card_no"
                onChange={(e) => businessInputData(e)}
              />
            </div>
            <div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <label>Business name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Business_name"
                  name="Business_name"
                  onChange={(e) => businessInputData(e)}
                />
              </div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <label> Business Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={(e) => businessInputData(e)}
                />
              </div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <label> Business Email </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e) => businessInputData(e)}
                />
              </div>
            </div>
          </div>
          <br />
          <input type="submit" value={"submit"} className="btn" />
        </form>
      </div>
    </div>
  );
}

export default Business;
