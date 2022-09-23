import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import IndividualResult from "../components/IndividualResult";
import { TiHomeOutline } from "react-icons/ti";
import styles from "./Pagination.module.css";
import Grid from "@mui/material/Grid";
import AppPagination from "../components/AppPagination";

const SearchResults = () => {
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    document.title = "Pagination Trial";

    try {
      setTimeout(() => {
        const fetchData = async () => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10`
          );
          setPageData(response.data);
          const totalData = 500;
          setPageCount(totalData / 10);
        };
        fetchData();
      }, 2000);
    } catch (err) {
      alert("Couldn't fetch data");
    }
  }, []);

  const fetchDataPerPage = async (currentPage) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=10`
    );
    return response.data;
  };

  const handlePageClick = async (event, value) => {
    // console.log("Current Page: ", value);
    const newPageData = await fetchDataPerPage(value);
    setPageData(newPageData);
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
            {/* {pageData?.data.total_count}  */}
            JSON Placeholder
          </h1>
        </div>
        <hr />
      </Grid>
      <Grid item xlg={8} lg={8} md={8} sm={8} xs={12}>
        {pageData?.map((values, index) => (
          <IndividualResult
            key={index}
            name={values.id}
            link={values.email}
            author={values.email}
            stars={values.name.slice(0, 20)}
            forks={values.name.slice(0, 20)}
            watchers={values.name.slice(0, 20)}
            description={values.email}
            lastUpdate={values.email}
          />
        ))}
      </Grid>
      <Grid item xlg={10} lg={10} md={10} sm={10} xs={12}>
        <AppPagination count={pageCount} handlePageClick={handlePageClick} />
      </Grid>
    </Grid>
  );
};

export default SearchResults;
