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

const DynamicForm = () => {
  const formData = mapObjectToArray(formFields);

  return (
    <div>
      <h2 className="font">Dynamic Forms</h2>
      <form>
        {formData.map((form, index) => (
          <div key={index}>
            <label className="font">{form.label}</label>
            <input
              type={form.type}
              name={form.name}
              placeholder={form.placeholder}
              // value={formValue.name}
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
