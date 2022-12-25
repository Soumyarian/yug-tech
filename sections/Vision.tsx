import { Stack, Typography } from "@mui/material";
import React from "react";
import SectionGrid from "../components/SectionGrid";
import SectionParagraph from "../components/SectionParagraph";

const Vision = () => {
  return (
    <SectionGrid title="Vision" rightImage>
      <Stack gap={2}>
        <SectionParagraph>
          Yog could be accessible to every individual who wants to gain control
          on himself and his consciousness .
        </SectionParagraph>
        <SectionParagraph>
          Connect young youth to yog through the language they associate that is
          the latest immersive and emerging technology.
        </SectionParagraph>
        <SectionParagraph>
          Bring yog into day to day practice for every individual . Create
          different ways for them to connect with yog .
        </SectionParagraph>
      </Stack>
    </SectionGrid>
  );
};

export default Vision;
