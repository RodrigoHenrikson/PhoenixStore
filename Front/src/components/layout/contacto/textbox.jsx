import React from 'react';

const TextBox = ({ label, id, name, placeholder, value, onChange }) => {
  return (
    <div>
      
      <label htmlFor={id} className="frmLabel">
        {label}:
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="field"
        value={value}
        onChange={onChange}
      />
     
    </div>
  );
};

export default TextBox;
