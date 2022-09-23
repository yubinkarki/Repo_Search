import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import IndividualResult from "../components/IndividualResult";
import { TiHomeOutline } from "react-icons/ti";
import styles from "./SearchResults.module.css";
import Grid from "@mui/material/Grid";

const SearchResults = () => {
  const location = useLocation();
  const sortOptionRef = useRef();
  const [searchData, setSearchData] = useState();

  let searchQuery = location.state?.searchQuery;

  useEffect(() => {
    document.title = "Results";

    try {
      setTimeout(() => {
        const fetchData = async () => {
          if (searchQuery !== "") {
            const response = await axios.get(
              `https://api.github.com/search/repositories?q={${searchQuery}}{&page=1,per_page=10,sort,order}`
            );
            setSearchData(response);
            // setPageData(response.data.items);
          }
        };

        fetchData();
      }, 2000);
    } catch (err) {
      alert("Could not fetch data");
    }
  }, [searchQuery, searchData]);

  const sortOptionHandler = () => {
    const sortOptionValue = sortOptionRef.current.value;
    console.log(sortOptionValue);
  };

  return (
    <Grid
      container
      className={styles.searchWholeSection}
      justifyContent="center"
    >
      <Grid item xlg={8} lg={8} md={8} sm={8} xs={12}>
        <Link to="/">
          <TiHomeOutline style={{ fontSize: "2rem", color: "black" }} />
        </Link>
        <div className={styles.searchMainDiv}>
          <h1 className={styles.h1}>
            {searchData?.data.total_count} repositories found
          </h1>
          <form className={styles.searchSortForm}>
            <select
              className="search-sort-select"
              onChange={sortOptionHandler}
              ref={sortOptionRef}
            >
              <option disabled>Sort options</option>
              <option value="bestMatch">Best Match</option>
              <option value="mostStars">Most Stars</option>
              <option value="fewestStars">Fewest Stars</option>
            </select>
          </form>
        </div>
        <hr />
      </Grid>
      <Grid item xlg={8} lg={8} md={8} sm={8} xs={12}>
        {searchData?.data.items.map((values, index) => (
          <IndividualResult
            key={index}
            name={values.full_name}
            link={values.html_url}
            author={values.owner.login}
            stars={values.stargazers_count}
            forks={values.forks_count}
            watchers={values.watchers_count}
            description={values.description}
            lastUpdate={values.updated_at}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default SearchResults;
