import React from "react";
import "./styles/CardStyle.css";

const Cardcomp = ({ lists }) => {
  return (
    <div id="mainAlign" className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {lists.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="col" id="highlight">
                  <div className="card h-100">
                    <div className="card-body" id="cardAlign">
                      <p className="card-text">{item.title}</p>
                      <h3 className="card-title">{item.price} </h3>
                      <hr />
                      {/* <i className="fa-solid fa-check"></i> */}
                      <ul className="fa-ul">
                        <li>
                          {item.user1 == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          {item.user}
                        </li>
                        <li>
                          {item.storage == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          50GB Storage
                        </li>
                        <li>
                          {item.publicProjects == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          Unlimited Public Projects
                        </li>
                        <li>
                          {item.communityAccess == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          Community Access
                        </li>

                        <li
                          style={{
                            color: item.privateProjects ? "black" : "lightgrey",
                          }}
                        >
                          {item.privateProjects == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          Unlimited Private Projects
                        </li>
                        <li
                          style={{
                            color: item.phoneSupport ? "black" : "lightgrey",
                          }}
                        >
                          {item.phoneSupport == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          Dedicated Phone Support
                        </li>
                        <li
                          style={{
                            color: item.subDomain ? "black" : "lightgrey",
                          }}
                        >
                          {item.subDomain == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          Free SubDomain
                        </li>
                        <li
                          style={{ color: item.status ? "black" : "lightgrey" }}
                        >
                          {item.status == true ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            <i className="fa-solid fa-xmark"></i>
                          )}
                          Monthly Status Report
                        </li>
                      </ul>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-primary" type="button">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cardcomp;
