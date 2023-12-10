import React from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import "./Coding.css";
import Navbar from "./container/Navbar/Navbar";

const CodingQuestions = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th >Sr NO</th>
                <th style={{ width: "50%" }}>Problem</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA[0].data.map((item) => (
                <tr key={item.sr_no}>
                  <td>{item.sr_no}</td>
                  <td>{item.problem}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CodingQuestions;
