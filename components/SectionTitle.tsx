import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

const SectionTitle = ({
  children,
  sx = {},
}: {
  children: ReactNode;
  sx?: any;
}) => {
  return (
    <Typography variant="h5" textTransform="uppercase" fontWeight={600} sx={sx}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
