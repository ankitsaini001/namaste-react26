//const [filteredRestaurants, setFilteredRestaurants] = useState([]);

const FilterTopRatedRestro = ({ onFilter }) => {
  return (
    <button className="filter-btn" onClick={onFilter}>
      ⭐ Top Rated Restaurants
    </button>
  );
};

export default FilterTopRatedRestro;