import React from "react";

const DropdownSelect = ({ selectedValue, onSelectChange }) => {
  const handleChange = (event) => {
    onSelectChange(Number(event.target.value));
  };

  return (
    <>
      Select duration: &nbsp;
      <select value={selectedValue} onChange={handleChange}>
        <option value={1}>Today's</option>
        <option value={7}>Week old</option>
        <option value={30}>Month old</option>
      </select>
    </>
  );
};

export default DropdownSelect;
