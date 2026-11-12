import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData, //previous data
      [name]: value, //update date
    //   [e.target.name]: e.target.value, //update date
    });
  };
  console.log(formData);

  return (
    <div>
      <h2>Reg Form</h2>
      <input
        type="text"
        value={formData.name}
        name="name"
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <input
        type="text"
        value={formData.email}
        name="email"
        onChange={handleChange}
        placeholder="Enter a email"
      />
      <input
        type="text"
        value={formData.age}
        name="age"
        onChange={handleChange}
        placeholder="Enter a age"
      />
    </div>
  );
}
