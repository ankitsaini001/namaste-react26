import { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";

const SearchBar = ({searchText, setSearchText, searchFilter}) => {
  const { user, setUserName } = useContext(UserContext);

  useEffect(() => {
    if (!searchText && user) {
      setSearchText(user);
    }
  }, [user, searchText, setSearchText]);
  
  return (
    <div className="search-bar">
      <p>{user}</p>
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
        value={searchText || user}
        onChange={(e) => {
          setSearchText(e.target.value);
          setUserName(e.target.value);
        }}
        onKeyUp={searchFilter}
      />    
      <button className="search-btn" onClick={searchFilter}>Search</button>
    </div>
  );
};

export default SearchBar;