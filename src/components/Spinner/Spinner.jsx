import React from "react";

// Material-ui
import { makeStyles, CircularProgress } from "@material-ui/core";

// Styles
import "./spinner.styles.scss";

const Styles_Spinner = makeStyles((theme) => ({
  loaderContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    webkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
  },
  spinner: {
    color: theme.palette.common.white,
  },
}));

const Spinner = ({ text = "" }) => {
  const S = Styles_Spinner();
  return (
    <div className={S.loaderContainer}>
      <CircularProgress className={S.spinner} size={60} />
    </div>
  );
};

export default Spinner;
