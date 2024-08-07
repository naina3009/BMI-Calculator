import { FC, useState } from "react";
import "./BmiCalculator.css";
import CustomButton from "../../components/buttons/CustomButton";
import PieChart from "../../components/charts/PieChart";
import InputField from "../../components/input/InputField";
import CustomRadioSelect from "../../components/radio/CustomRadioSelect";

const BMICalculator: FC = () => {
  const [inputs, setInputs] = useState<any>({
    gender: "female",
    age: 22,
    feet: 5,
    inches: 7,
    weight: 60,
  });

  const [result, setResult] = useState<number>(0);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };
  const handleRadioChange = (event:any) => {
    const { value } = event.target;
    setInputs((values:any) => ({ ...values, gender: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Convert height to meters
    const feet = parseFloat(inputs.feet);
    const inches = parseFloat(inputs.inches);
    const heightInMeters = feet * 0.3048 + inches * 0.0254;

    // Convert weight to kilograms
    const weightInKg = parseFloat(inputs.weight);

    // Calculate BMI
    if (heightInMeters > 0) {
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setResult(calculatedBmi);
    } else {
      setResult(0);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="d-flex justify-content-center my-4">BMI Calculator</h2>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="m-2">
              <span className="me-4 pe-4">Gender</span>
              <CustomRadioSelect
                onChange={handleRadioChange}
                className="ms-4 ps-4"
                value={inputs.gender}
              />
            </div>

            <div className="m-2">
              <span>Age</span>
              <InputField
                label="Age"
                value={inputs.age}
                placeHolder="Enter Age"
                onChange={handleChange}
                name={"age"}
              />
            </div>

            <div className="m-2">
              <span>Height</span>
              <InputField
                label="Feet"
                value={inputs.feet}
                placeHolder="Enter Feett"
                onChange={handleChange}
                name={"feet"}
              />
              <br />
              <InputField
                value={inputs.inches}
                placeHolder="Enter Age"
                label="Inches"
                onChange={handleChange}
                name={"inches"}
              />
            </div>
            <div className="m-2">
              <span>Weight</span>
              <InputField
                label="Kg"
                value={inputs.weight}
                placeHolder="Enter Age"
                onChange={handleChange}
                name={"weight"}
              />
            </div>
            <CustomButton label="Calculate" />
          </form>
        </div>
        <div className="col-6">
          <h4> Result -{Math.floor(result)}</h4>
          <PieChart />
        </div>
      </div>
    </div>
  );
};
export default BMICalculator;
