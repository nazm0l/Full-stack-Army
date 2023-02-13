import React, { useState } from "react";

const formFields = {
  name: {
    type: "text",
    label: "What is Your Name?",
    placeholder: "Najmul",
  },
  email: {
    type: "email",
    label: "What is Your Email?",
    placeholder: "najmul@example.com",
  },
  phone: {
    type: "tel",
    label: "What is Your Phone?",
    placeholder: "017xxxxxx",
  },
  address: {
    type: "text",
    label: "What is Your Address?",
    placeholder: "Dhaka, Bangladesh",
  },
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };

    return acc;
  }, {});
};

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...formFields[key] }));
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formFields));
  const formData = mapObjectToArray(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    const values = Object.keys(formState).reduce((acc, cur) => {
      acc[cur] = formState[cur].value;

      return acc;
    });
    console.log(values);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        ...formState[event.target.name],
        value: event.target.value,
      },
    });
  };

  return (
    <div>
      <h2 className="font">Dynamic Forms</h2>
      <form onSubmit={handleSubmit}>
        {formData.map((form, index) => (
          <div key={index}>
            <label className="font">{form.label}</label>
            <input
              type={form.type}
              name={form.name}
              placeholder={form.placeholder}
              value={form.value}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
