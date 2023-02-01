import React from "react";
import { useState } from "react";
import "./style.css";

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formValue.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formValue.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </>
  );
};

export default ContactForm;
