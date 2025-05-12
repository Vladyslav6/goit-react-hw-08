import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p className="mb-1">Find contact by name</p>
      {/* <input
        className={css.inputSearch}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      /> */}
      <label className="input mb-5">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="text"
          required
          placeholder="Search"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default SearchBox;
