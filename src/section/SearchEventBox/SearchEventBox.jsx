import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import IconCardSection from "../IconCardSection/IconCardSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchEventBox = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  // 1️⃣ Fetch all states
  useEffect(() => {
    axios
      .get("https://eventdata.onrender.com/states")
      .then((res) => setStates(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 2️⃣ Fetch cities when state is selected
  useEffect(() => {
    if (selectedState) {
      axios
        .get(`https://eventdata.onrender.com/cities/${selectedState}`)
        .then((res) => setCities(res.data))
        .catch((err) => console.log(err));
    }
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
      alert("Please select both State and City");
      return;
    }

    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="d-flex align-items-center gap-3 mb-4">

        {/* State Dropdown */}
        <SearchBar
          label="State"
          options={states}
          onSelect={(value) => {
            setSelectedState(value);
            setSelectedCity(""); // Reset city when state changes
          }}
        />

        {/* City Dropdown */}
        <SearchBar
          label="City"
          options={cities}
          disabled={!selectedState}
          onSelect={(value) => setSelectedCity(value)}
        />

        {/* Search Button */}
        <button
          className="btn btn-primary ps-5 pe-5 p-2"
          style={{ height: "55px" }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* <IconCardSection /> */}
    </div>
  );
};

export default SearchEventBox;
