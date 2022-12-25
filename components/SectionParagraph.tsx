import { Typography } from "@mui/material";
import { ReactNode } from "react";

const SectionParagraph = ({
  children,
  textAlign = "left",
  fullwidth = false,
}: {
  children: ReactNode;
  textAlign?: "left" | "right" | "center";
  fullwidth?: boolean;
}) => {
  return (
    <Typography
      sx={{ maxWidth: fullwidth ? "100%" : { lg: "70%", xs: "100%" } }}
      lineHeight={2}
      textAlign={{ xs: "left", lg: textAlign }}
      fontSize={{ xs: "14px", lg: "16px" }}
      color="textSecondary"
      fontFamily="Literata">
      {children}
    </Typography>
  );
};

export default SectionParagraph;
