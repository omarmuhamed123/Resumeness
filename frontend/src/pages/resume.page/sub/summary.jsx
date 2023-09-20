import "./summary.css";
import React from "react";

function Summary({ summaryInfo }) {
  return (
    <div id="summary">
      <h1 style={{ wordBreak: 'break-all' }}>{summaryInfo.fullname}</h1>
      <div className="kapran">
        <h3>Experience: </h3>

        <ul style={{ listStyle: "dosc" }}>
          {summaryInfo.experData?.map((ele) => {
            let check = false;
            for (let key in ele) {
              if (ele[key] !== "") {
                check = true;
                break;
              }
            }
            if (check) {
              return (
                <li style={{ marginBottom: 15 }}>
                  <h5 style={{ display: "inline-block" }}>{ele.jobTitle} </h5>
                  <span>
                    {" "}
                    {ele.from}/{ele.to}
                  </span>
                  <br />
                  <h5 >{ele.jobDesc}</h5>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="box">
        <h3>Projects: </h3>
        <ul className="list">
          {summaryInfo.projData?.map((ele) => {
            if (ele !== "") {
              return (
                <li>
                  <h5 className="list-item">{ele}</h5>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

function Language({ langsInfo }) {
  return (
    <div id='summary'>
      <h3>Languages:</h3>
      <ul className="list">
        {langsInfo?.map((val) => {
          if (val !== "") {
            return <li className="list-item">{val}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

function Hobbs({ hobbsInfo }) {
  return (
    <div id='summary'>
      <h3>Hobbies:</h3>
      <ul className="list">
        {hobbsInfo?.map((val) => {
          if (val !== "") {
            return <li className="list-item">{val}</li>;
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}

export { Summary, Language, Hobbs };
