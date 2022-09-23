import React from "react";
import styles from "./IndividualResult.module.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

const IndividualResult = (props) => {
  const navigate = useNavigate();

  const repoNameLinkHandler = () => {
    navigate("/searchresults/details", {
      state: { repoName: props.name },
    });
  };

  return (
    <div className={styles.wholeDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.resultIconDiv}>
          <div>
            Repo Name:{" "}
            <button
              type="button"
              onClick={repoNameLinkHandler}
              className={styles.button}
            >
              {props.name}
            </button>
          </div>
          {/* <ImLink className={styles.resultIcon} style={{ fontSize: "14px" }} /> */}
        </div>
        <div>Author: {props.author}</div>
        <div>Stars: {props.stars}</div>
        <div className={styles.resultIconDiv}>
          <div>Forks: {props.forks}</div>
          <BiGitRepoForked className={styles.resultIcon} />
        </div>
        <div className={styles.resultIconDiv}>
          <div>Watchers: {props.watchers}</div>
          <FaRegEye className={styles.resultIcon} />
        </div>
        <div>Description: {props.description}</div>
        <div>Last Updated: {props.lastUpdate.slice(0, 10)}</div>
      </div>
      <hr />
    </div>
  );
};

export default IndividualResult;
