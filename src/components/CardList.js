import React from "react";
import { css } from "@emotion/css";

const styles = {
  container: css({
    height: "40px",
    backgroundColor: "transparet",
    boxShadow: "2px 2px 8px rgba(111, 111, 111, 0.2)",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    padding: "0px 8px",
  }),
  label: css({
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "bold",
  }),
};

const CardList = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{data.name}</p>
      <p className={styles.label}>owned: {data.ownedTotal}</p>
    </div>
  );
};

export default CardList;
