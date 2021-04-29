import React from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: css({
    height: "32px",
    backgroundColor: "#fff",
    borderBottom: "1px solid grey",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    position: "sticky",
    top: 0,
  }),
  icon: css({
    fontSize: 18,
  }),
  title: css({
    fontFamily: "Poppins",
  }),
};

const Header = () => {
  return (
    <div className={styles.container}>
      {/* <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} /> */}
      <h3 className={styles.title}>Pokemon</h3>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </div>
  );
};

export default Header;
