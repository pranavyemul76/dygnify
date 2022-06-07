import React from "react";
import Styles from "../Styles/Home.module.css";
import Business from "./Business";
import Loan from "./Loan";
import Personal from "./Personal";
function Home() {
  return (
    <div>
      <h3 className={Styles.headingtext}> Loan Application process</h3>
      <div className="row">
        <div className="col-4">
          <div
            className={`list-group ${Styles.flexdirection} `}
            id="list-tab"
            role="tablist"
          >
            <a
              className="list-group-item list-group-item-action active"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
            >
              Personal
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
            >
              Business
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-messages-list"
              data-bs-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
            >
              loan
            </a>
          </div>
        </div>
        <div className="row">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <Personal />
            </div>

            <div
              className="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <Business />
            </div>
            <div
              className="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <Loan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
