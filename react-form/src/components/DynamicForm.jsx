import React from "react";

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
};

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...formFields[key] }));
};

console.log(mapObjectToArray(formFields));

const DynamicForm = () => {
  return (
    <div>
      <h2>Dynamic Forms</h2>
    </div>
  );
};

export default DynamicForm;
