import React, { useState } from "react";

const SearchBar = ({ label, options = [], onSelect, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="input-group w-50">
      <select
        className="form-select "
        disabled={disabled}
        onChange={(e) => onSelect(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
         style={{ height: "55px" }}  
      >
        <option value="">{label}</option>

        {options.map((item, index) => (
          <option key={index} value={item} >
            {item}
          </option>
        ))}
      </select>

     
    </div>
  );
};

export default SearchBar;
