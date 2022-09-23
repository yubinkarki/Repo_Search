import React, { useRef } from "react";
import "./FormComponent.module.css";
import { useNavigate } from "react-router-dom";
import styles from "./FormComponent.module.css";

const FormComponent = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredSearchText = searchInputRef.current.value;
    // localStorage.setItem("searchQuery", enteredSearchText);
    navigate("/searchresults", { state: { searchQuery: enteredSearchText } });
  };

  return (
    <div className={styles.formMainDiv} onSubmit={formSubmitHandler}>
      <form className={styles.formMain}>
        <input
          htmlFor="repo-search"
          type="text"
          maxLength="50"
          className={styles.searchInput}
          placeholder="Search here"
          required
          ref={searchInputRef}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
