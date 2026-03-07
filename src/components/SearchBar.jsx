const SearchBar = ({searchText, setSearchText, searchFilter}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyUp={searchFilter}
      />    
      <button className="search-btn" onClick={searchFilter}>Search</button>
    </div>
  );
};

export default SearchBar;