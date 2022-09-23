import React, { useEffect, useState } from "react";
import styles from "./ResultDetails.module.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ImLink } from "react-icons/im";
import { TiHomeOutline } from "react-icons/ti";
import Grid from "@mui/material/Grid";

const ResultDetails = () => {
  let location = useLocation();
  const repoName = location.state?.repoName;
  const [repoDetails, setRepoDetails] = useState();
  const [userName, setUserName] = useState();
  console.log(repoDetails);
  console.log(repoName);

  useEffect(() => {
    document.title = "Result Details";

    const fetchData = async () => {
      if (repoName !== "") {
        const response = await axios.get(
          `https://api.github.com/repos/${repoName}`
        );
        setRepoDetails(response);
        const userName = response.data.owner.login;
        console.log(userName);
        const userInfo = await axios.get(
          `https://api.github.com/users/${userName}`
        );
        setUserName(userInfo);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      className={styles.resultDetailsMain}
    >
      <Grid
        item
        xlg={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        className={styles.resultDetails}
      >
        <Link to="/">
          <TiHomeOutline
            style={{ fontSize: "2rem", color: "black", marginBottom: "1rem" }}
          />
        </Link>
        <h1 className={styles.resultDetailsHeading_h1}>
          Repository - {repoName}
        </h1>
        <hr />
        <div>
          <p className={styles.p}>
            Owned by{" "}
            <a
              className={styles.resultDetailsOwnerLink}
              href={repoDetails?.data.owner.html_url}
            >
              {userName?.data.name}
            </a>
            <ImLink style={{ fontSize: "14px", marginLeft: "8px" }} />
          </p>
        </div>
        <div className={styles.resultDetailsRepoLinkDiv}>
          <a
            href={repoDetails?.data.html_url}
            className={styles.resultDetailsRepoLink}
          >
            <p className={styles.p}>GitHub Repository</p>
          </a>
        </div>
        <div className="result-details-open-issues">
          <p className={styles.p}>
            Open Issues: {repoDetails?.data.open_issues_count}
          </p>
        </div>
        <div className="result-details-default-branch">
          <p className={styles.p}>
            Default: {repoDetails?.data.default_branch}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default ResultDetails;
