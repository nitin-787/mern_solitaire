import React, { useState } from "react";

const ToggleForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Toggle function
  const toggleVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Toggle Form Example</h2>

      <button onClick={toggleVisibility} style={{ padding: "10px 20px" }}>
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>

      {isFormVisible && (
        <form
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h3>Registration Form</h3>
          <div>
            <label>Name: </label>
            <input type="text" placeholder="Enter name" />
          </div>
          <br />
          <div>
            <label>Email: </label>
            <input type="email" placeholder="Enter email" />
          </div>
          <br />
          <button type="button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ToggleForm;
