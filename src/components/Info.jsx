import React from "react";

function Info(props) {
  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            BMI: {props.bmi}
          </span>
          <div className="card-data">
            <span data-test="weight">Weight: {props.weight} kg</span>
            <span data-test="height">Height: {props.height} cm</span>
            <span data-test="date">Date: {props.date}</span>
          </div>

          <button className="delete-btn" onClick={() => props.deleteCard(props.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;