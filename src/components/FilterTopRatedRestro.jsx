//const [filteredRestaurants, setFilteredRestaurants] = useState([]);

const FilterTopRatedRestro = ({ onFilter }) => {
  return (
    <button className="filter-btn" data-testid="top-rated-filter" onClick={onFilter}>
      ⭐ Top Rated Restaurants
    </button>
  );
};

export default FilterTopRatedRestro;