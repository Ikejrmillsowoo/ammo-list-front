import React from 'react';

const CustomButton = ({ label, onClick }) => {
  return (
    <button className="header-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;