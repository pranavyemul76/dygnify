import React from "react";
import Styles from "../Styles/Home.module.css";
import axios from "axios";

function Loan() {
  const [inputdata, setinput] = React.useState({});
  const [responsemessege, setmessege] = React.useState(false);
  const handleLoan = (event) => {
    event.preventDefault();

    setmessege(false);
    axios({
      url: "/loan",
      method: "POST",
      data: {
        loan_type: inputdata.Loan_type,
        loan_amount: inputdata.loan_amount,
        annual_income: inputdata.annual_income,
        loan_tenure: inputdata.loan_tenure,
        interest_rate: inputdata.interest,
        job_title: inputdata.job_title,
        Use_for: inputdata.used,
      },
    })
      .then((res) => {
        setmessege(res.data.messeage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Setinput = (event) => {
    inputdata[event.target.name] = event.target.value;
  };
  return (
    <div>
      <div>
        <div className={Styles.formslayout}>
          <form onSubmit={handleLoan}>
            <div>
              <h4 style={{ textAlign: "center" }}>Loan Deatils</h4>
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
                <label>Select loan Type</label>
                <select
                  className="form-control"
                  id="sel1"
                  onChange={(e) => Setinput(e)}
                  name="Loan_type"
                >
                  <option value={"Gold loans"}>Gold loans</option>
                  <option value={"Personal loan"}>Personal loan</option>
                  <option value={"Short-term business loans"}>
                    Short-term business loans
                  </option>
                  <option value={"Student Loans"}>Student Loans</option>
                </select>
              </div>
              <div className={Styles.inputlayout}>
                <label>loan amount </label>
                <input
                  type="number"
                  className="form-control"
                  id="loan_amount"
                  name="loan_amount"
                  onChange={(e) => Setinput(e)}
                />
              </div>
              <div className={Styles.inputlayout}>
                <label>Annual income</label>
                <input
                  type="number"
                  className="form-control"
                  id="annual_income"
                  name="annual_income"
                  onChange={(e) => Setinput(e)}
                />
              </div>

              <div className={Styles.inputlayout}>
                <label>loan tenure</label>
                <input
                  type="number"
                  className="form-control"
                  id="loan_tenure"
                  name="loan_tenure"
                  onChange={(e) => Setinput(e)}
                />
              </div>
              <div className={Styles.inputlayout}>
                <label>interest Rate</label>
                <input
                  type="number"
                  className="form-control"
                  id="interest"
                  name="interest"
                  onChange={(e) => Setinput(e)}
                />
              </div>
              <div className={Styles.inputlayout}>
                <label>job Tilte</label>
                <input
                  type="text"
                  className="form-control"
                  id="job_title"
                  name="job_title"
                  onChange={(e) => Setinput(e)}
                />
              </div>
              <div>
                <div
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <label>What wiil the loan be used for</label>
                  <input
                    type="text"
                    className="form-control"
                    id="used"
                    name="used"
                    onChange={(e) => Setinput(e)}
                  />
                </div>
              </div>
            </div>
            <br />
            <input type="submit" value={"submit"} className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loan;
