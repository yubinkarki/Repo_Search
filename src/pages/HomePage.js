import React, { useEffect } from "react";
import FormComponent from "../components/FormComponent";
import Grid from "@mui/material/Grid";
import styles from "./HomePage.module.css";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Grid container justifyContent="center" className={styles.homeMainDiv}>
      <Grid
        item
        xlg={6}
        lg={6}
        md={8}
        sm={10} // Tablet 768px and up.
        xs={10}
        className={styles.homeMainGridItem}
      >
        <div className={styles.headingDiv}>
          <a href="https://github.com/search" className={styles.headingLink}>
            {" "}
            <FiGithub className={styles.headingIcon} />
          </a>
          <h1 className={styles.homeMainDiv.h1}>
            Search for GitHub repositories
          </h1>
        </div>
        <FormComponent />
        <div className={styles.homeSubtitleDiv}>
          <p>
            Enter the name of any repository on GitHub. Example: <em>linux</em>,{" "}
            <em>react</em>, <em>node</em> and such. You will be redirected to
            another page with the search results.
          </p>
        </div>
        <div className={styles.homeSubtitleDiv}>
          <p>
            <Link to="/page" className={styles.footerLink}>
              Pagination
              <AiOutlineLink style={{ marginLeft: "5px" }} />
            </Link>
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
