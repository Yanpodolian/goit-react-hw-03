// import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Find contacts by name"
    value={value}
    onChange={onChange}
  />
);

export default SearchBox;
