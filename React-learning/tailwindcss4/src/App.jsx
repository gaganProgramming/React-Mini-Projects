// src/App.js
import React from "react";
import Form from "./Component/form"; // Import the Form component
import API from "./Component/API";

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Form /> 
      <API/>
    </div>
  );
};

export default App;
