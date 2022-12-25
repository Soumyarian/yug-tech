import { Typography } from "@mui/material";
import React from "react";
import SectionGrid from "../components/SectionGrid";
import SectionParagraph from "../components/SectionParagraph";

const AboutUs = () => {
  return (
    <SectionGrid title="About us">
      <SectionParagraph textAlign="right">
        Yuj Tech is a Research based company where we infuse Technology with
        yogic sciences. At yuj tech is creating a revolutionary movement where
        the youth can gain mastery over their mind instead of being slaves to
        their mind & Senses . Yog is proven science , at yuj tech we create
        innovative ways to use yog with the latest immersive and emerging
        technology which can be used by youth , sports personnel , co operative
        sector or any one
      </SectionParagraph>
    </SectionGrid>
  );
};

export default AboutUs;
