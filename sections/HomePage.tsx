import { Box, Button, Grid, Stack, Typography, Container } from "@mui/material";
import React from "react";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { Header } from "../components";
import { useScreenSize } from "../hooks/useScreenSize";

const HomePage = () => {
  const { isMobile } = useScreenSize();

  const image = (
    <Grid item lg={6}>
      <Box
        sx={{
          borderBottomLeftRadius: { xs: 0, lg: 200 },
          borderTopRightRadius: { xs: 0, lg: 200 },
          overflow: "hidden",
        }}>
        <img
          src="1.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Grid>
  );
  const text = (
    <Grid item lg={6}>
      <Stack gap={4} justifyContent="center" sx={{ height: "100%" }}>
        <Stack gap={2}>
          <Typography
            fontSize={{ xs: "24px", lg: "48px" }}
            fontFamily="Literata"
            fontWeight={600}
            textTransform="capitalize">
            Balance your Mind, Body & Soul Online & from Anywhere
          </Typography>
          <Typography
            color="textSecondary"
            fontWeight={500}
            lineHeight={2}
            fontSize={{ lg: "16px", xs: "14px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            incidunt distinctio, aliquid consequatur enim sapiente deleniti
            asperiores debitis pariatur voluptatum!
          </Typography>
        </Stack>
        <Stack direction="row" gap={2}>
          <Button variant="contained" size="large" endIcon={<FiPhoneCall />}>
            Contact us
          </Button>
          <Button variant="outlined" size="large" endIcon={<FiArrowRight />}>
            Explore More
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );

  return (
    <>
      <Stack
        id="home"
        sx={{ minHeight: "100vh" }}
        justifyContent="center"
        alignItems="center">
        <Stack gap={3} alignItems="center">
          <Box
            sx={{
              width: "300px",
              height: "300px",
              borderRadius: "100%",
              overflow: "hidden",
            }}>
            <img
              src="/1.jpg"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Stack
            sx={{ textAlign: "center" }}
            alignItems="center"
            gap={{ xs: 1, lg: 0 }}>
            <Typography
              fontSize={{ xs: "24px", lg: "56px" }}
              fontFamily="Literata"
              fontWeight={700}
              textTransform="capitalize">
              "Yogash chitta Virtti Nirodha"
            </Typography>
            <Typography
              color="textSecondary"
              fontSize={{ lg: "18px", xs: "14px" }}>
              Yog to gain mastery over the mind With help of latest technology
              (VR . meditative headbands )
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <Button variant="contained" size="large" endIcon={<FiPhoneCall />}>
              Contact us
            </Button>
            <Button variant="outlined" size="large" endIcon={<FiArrowRight />}>
              Explore More
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Container>
        <Header />
        <Stack sx={{ minHeight: "100vh" }} justifyContent="center">
          <Grid container spacing={2}>
            {isMobile ? (
              <>
                {image}
                {text}
              </>
            ) : (
              <>
                {text}
                {image}
              </>
            )}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
