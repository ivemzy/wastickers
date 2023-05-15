import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite',
  };

  return <div style={spinnerStyle}></div>;
};

export default Spinner;
