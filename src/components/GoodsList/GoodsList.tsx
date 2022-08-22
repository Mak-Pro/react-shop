import React from "react";

import styles from "./GoodsList.module.scss";

import Grid from "@mui/material/Grid";

const GoodsList = (props: React.PropsWithChildren) => {
  return (
    <Grid container spacing={2}>
      {props.children}
    </Grid>
  );
};

export default GoodsList;
