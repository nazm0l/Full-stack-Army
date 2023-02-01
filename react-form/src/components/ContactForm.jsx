import React from "react";
import { useState } from "react";
import "./style.css";

const ContactForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Enter Your Name" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </>
  );
};

export default ContactForm;
