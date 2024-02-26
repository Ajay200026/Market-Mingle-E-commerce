import React, { useRef, useState } from "react";
import "./searchbar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const voiceRecognition = useRef(null);

  const handleSearch = () => {
    // Perform your search logic here based on the 'searchText'
    // For demonstration, let's just set the results to an array of strings
    const results = ["Result 1", "Result 2", "Result 3"];
    setSearchResults(results);

    // Update recent searches
    if (searchText && !recentSearches.includes(searchText)) {
      setRecentSearches([searchText, ...recentSearches.slice(0, 4)]);
    }

    // Show the dropdown
    setDropdownVisible(true);
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    // Clear search results when the input text is empty
    if (!inputText) {
      setSearchResults([]);
      // Hide the dropdown
      setDropdownVisible(false);
    }
  };

  const handleSearchIconClick = () => {
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleMicIconClick = () => {
    startVoiceRecognition();
  };

  const startVoiceRecognition = () => {
    const recognition =
      new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      recognition.stop();
      // Show the dropdown
      setDropdownVisible(true);
    };

    recognition.start();
    voiceRecognition.current = recognition;
  };

  const handleCameraIconClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Here you can capture a snapshot or stream the video for further processing
      // For simplicity, let's just stop the stream
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleResultClick = (result) => {
    // Handle the redirection logic for the selected result
    console.log(`Redirect to: ${result}`);
  };

  return (
    <div className="search-bar">
      <div className="search-icon" onClick={handleSearchIconClick}>
        {<i className="fa-solid fa-magnifying-glass"></i>}
      </div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
      />

      <div className="icon" onClick={handleMicIconClick}>
        {<i className="fa-solid fa-microphone"></i>}
      </div>
      <div className="icon" onClick={handleCameraIconClick}>
        {<i className="fa-solid fa-camera"></i>}
      </div>

      {isDropdownVisible && (
        <div className="dropdown">
          {searchResults.length > 0 && (
            <div className="search-results">
              <h3>Results</h3>
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} onClick={() => handleResultClick(result)}>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {recentSearches.length > 0 && (
            <div className="recent-searches">
              <h3>Recent Searches</h3>
              <ul>
                {recentSearches.map((recent, index) => (
                  <li key={index} onClick={() => setSearchText(recent)}>
                    {recent}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
