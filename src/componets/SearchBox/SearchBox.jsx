import css from "./SearchBox.module.css";
const SearchBox = ({ filterContact, setFilterContact }) => {
  return (
    <>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          value={filterContact}
          onChange={(e) => setFilterContact(e.target.value)}
        />
      </label>
    </>
  );
};
export default SearchBox;
