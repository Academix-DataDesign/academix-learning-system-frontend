import "./SearchInput.scss";

const SearchInput = () => {
  return (
    <div className={`search`}>
      <div className="overlap-group">
        <img className="vector" alt="Vector" src="vector.svg" />
      </div>
      <img className="img" alt="Vector" src="image.svg" />
    </div>
  );
};

export default SearchInput;
