import { Stack, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../components/SectionTitle";

const Mission = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `linear-gradient(45deg,
              rgba(0,0,0, 0.5),
              rgba(0,0,0,0.5)), url('2.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <SectionTitle sx={{ color: "#fff" }}>Our Mission</SectionTitle>
      <Stack alignItems="center" gap={1}>
        <Typography
          fontSize={{ xs: "24px", lg: "56px" }}
          fontFamily="Literata"
          textAlign="center"
          fontWeight={700}
          color="#fff">
          'Yogash citta vrtti nirodhah'
        </Typography>
        <Typography color="#fff" fontSize={{ xs: "16px", lg: "18px" }}>
          Yog to gain mastery over your mind
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Mission;
