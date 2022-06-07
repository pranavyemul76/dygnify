import axios from "axios";
import React from "react";
import Styles from "../Styles/Home.module.css";
const Personal = () => {
  const [personalData, setpersonaldata] = React.useState({});
  const [responsemessege, setmessege] = React.useState(false);
  const hanldePersonal = (event) => {
    event.preventDefault();

    setmessege(false);
    axios({
      url: "/personal",
      method: "POST",
      data: {
        firstname: personalData.FirstName,
        lastname: personalData.LastName,
        age: personalData.age,
        mobile_no: personalData.mobile_no,
        address: personalData.address,
        email: personalData.email,
        gender: personalData.gender,
      },
    })
      .then((res) => {
        setmessege(res.data.messeage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputPersnalData = (event) => {
    personalData[event.target.name] = event.target.value;
  };
  return (
    <div>
      <div className={Styles.formslayout}>
        <form onSubmit={hanldePersonal}>
          <div>
            <h4 style={{ textAlign: "center" }}>Personal Details</h4>
          </div>
          {responsemessege && (
            <div>
              <h3 style={{ textAlign: "center", color: "orange" }}>
                {responsemessege}
              </h3>
            </div>
          )}
          <div>
            <div className={Styles.inputlayout}>
              <label>Firstname</label>
              <input
                type="text"
                className="form-control"
                name="FirstName"
                onChange={(event) => inputPersnalData(event)}
              />
            </div>
            <div className={Styles.inputlayout}>
              <label>Lastname</label>
              <input
                type="text"
                className="form-control"
                name="LastName"
                onChange={(event) => inputPersnalData(event)}
              />
            </div>

            <div className={Styles.inputlayout}>
              <label>Age</label>
              <input
                type="Number"
                className="form-control"
                id="age"
                name="age"
                onChange={(event) => inputPersnalData(event)}
              />
            </div>
            <div className={Styles.inputlayout}>
              <label>Mobile no</label>
              <input
                type="number"
                className="form-control"
                id="mobile_no"
                name="mobile_no"
                onChange={(event) => inputPersnalData(event)}
              />
            </div>
            <div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={(event) => inputPersnalData(event)}
                />
              </div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <label>Email </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  name="email"
                  onChange={(event) => inputPersnalData(event)}
                />
              </div>
            </div>
          </div>
          <br />
          <div>
            <div>
              <label>Select Gender</label>
            </div>
            <label
              className="radio-inline"
              style={{ marginLeft: "10px", padding: "10px" }}
            >
              <input
                type="radio"
                name="gender"
                checked
                value={"male"}
                onChange={(event) => inputPersnalData(event)}
              />
              Male
            </label>
            <label className="radio-inline" style={{ padding: "10px" }}>
              <input
                type="radio"
                name="gender"
                value={"gemale"}
                onChange={(event) => inputPersnalData(event)}
              />
              Gemale
            </label>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Personal;
