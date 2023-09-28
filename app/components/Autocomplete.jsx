import { List, ListItem, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";

function Autocomplete({ inputValue, setInputValue }) {
  //   const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Dummy suggestion data (you can replace this with your own data source)
  const suggestionData = [
    "2,000,000",
    "1,000,000",
    "500,000",
    "300,000",
    "200,000",
    "100,000",
    "50,000",
    "20,000",
  ];

  const getSuggestions = (value) => {
    const inputValueLowerCase = value.toLowerCase();
    return suggestionData.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValueLowerCase)
    );
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion);
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

  const suggestionListStyle = {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    backgroundColor: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    maxHeight: "150px",
    overflowY: "auto",
    border: "1px solid #ccc",
  };

  const handleInputBlur = () => {
    // Clear suggestions when the input field loses focus
    setTimeout(() => {
      setSuggestions([]);
    }, 200); // Adjust the delay as needed (e.g., 200 milliseconds)
  };

  return (
    <div className="autocomplete">
      <TextField
        label="Desired Amount"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        fullWidth
      />
      {suggestions.length > 0 && (
        <List style={suggestionListStyle}>
          {suggestions.map((suggestion, index) => (
            <ListItem
              key={index}
              button
              onClick={() => {
                console.log("clicked");
                handleSuggestionClick(suggestion);
              }}
            >
              <ListItemText primary={suggestion} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default Autocomplete;
