import React, { useState } from "react";

const initialData = {
  weight: "",
  height: "",
  date: ""
};


function BmiForm(props) {
  const [data, setData] = useState(initialData);

  function handleChange(e) {
    let { value, name } = e.target;

    if (value > 999) {
      value = 999;
    }
    const date = new Date().toLocaleDateString();
    setData(prevValue => {
      return {
        ...prevValue,
        [name]: value,
        date
      }
    });
  }

  function handleSubmit() {
    props.onChange(data);
    setData(initialData);
  }

  return (
    <>
      <div className="row">
        <div className="col m6 s12">
          <label htmlFor="weight">Weight (in kg)</label>
          <input 
            id="weight"
            name="weight"
            type="number"
            min="1"
            max="999"
            placeholder="50"
            value={data.weight}
            onChange={handleChange}
          />
        </div>
        <div className="col m6 s12">
          <label htmlFor="height">Height (in cm)</label>
          <input 
            id="height"
            name="height"
            type="number"
            min="1"
            max="999"
            placeholder="176"
            value={data.height}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col m6 s12 center">
          <button
            id="bmi-btn"
            className="calculate-btn"
            type="button"
            disabled={data.weight === '' || data.height === ''}
            onClick={handleSubmit}
          >
            Calculate BMI
          </button>
        </div>
        <div className="col m6 s12 center">
          <select className="chartSelect" value={props.defaultSelect} onChange={(e) => props.selectChange(e)}>
            <option value="Line">Line</option>
            <option value="Bar">Bar</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default BmiForm;