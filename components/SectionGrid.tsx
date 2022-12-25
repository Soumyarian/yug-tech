import { Grid, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { useScreenSize } from "../hooks/useScreenSize";
import SectionTitle from "./SectionTitle";

const SectionGrid = ({
  title,
  children,
  rightImage = false,
}: {
  title: string;
  children: ReactNode;
  rightImage?: boolean;
}) => {
  const { isMobile } = useScreenSize();
  const image = (
    <Grid item xs={12} lg={6}>
      <img src="/4.jpg" style={{ width: "100%" }} />
    </Grid>
  );

  if (isMobile) {
    return (
      <Stack gap={2}>
        <SectionTitle>{title}</SectionTitle>
        {image}
        {children}
      </Stack>
    );
  }

  return (
    <Grid container spacing={2}>
      {!rightImage && image}
      <Grid item xs={12} lg={6}>
        <Stack
          gap={4}
          justifyContent="center"
          alignItems={!rightImage ? "flex-end" : "flex-start"}>
          <SectionTitle>{title}</SectionTitle>
          {children}
        </Stack>
      </Grid>
      {rightImage && image}
    </Grid>
  );
};

export default SectionGrid;
