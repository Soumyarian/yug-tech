import {
  Typography,
  Grid,
  Stack,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import SectionParagraph from "../components/SectionParagraph";
import SectionTitle from "../components/SectionTitle";

const IndivisualGrowth = () => {
  return (
    <Stack gap={4}>
      <SectionTitle>Individual Growth</SectionTitle>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Stack gap={1}>
            <SectionParagraph fullwidth>
              Today, children and youth have a lot of distractions around them.
              With increased exposure to technology and games, people spend most
              of their time on their phones, Television, and computers.. This
              has also caused several health problems that hamper their overall
              growth and development.
            </SectionParagraph>
            <SectionParagraph fullwidth>
              The peer pressure to stand out the best and immense pressure from
              their surroundings, meeting the deadlines at work , balancing
              domestic and work life has hampered their growth leading to stress
              anxiety, panic attack , exam pressure ,performance pressure, and
              so on.
            </SectionParagraph>
            <SectionParagraph fullwidth>
              Given below are basic modules which will help to relax and over
              constant practice help them concentrate on their goals.
            </SectionParagraph>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardMedia component="img" src="/3.jpg" />
            <CardHeader title="Improve concentration for students" />
            <CardContent>
              <Typography
                lineHeight={2}
                fontFamily="Literata"
                color="textSecondary">
                It's a combination of different techniqes compiled together to
                give instant relief and help improve concentration. Over
                constant practice can give great results .One can think of
                getting into future modules where things are designed as per
                particular problem area
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card sx={{ height: "100%" }}>
            <CardMedia component="img" src="/2.jpg" />
            <CardHeader title="Improve mental health" />
            <CardContent>
              <Typography
                lineHeight={2}
                fontFamily="Literata"
                color="textSecondary">
                It's a combination of different techniqes compiled together to
                give instant relief and help improve general health . Over
                constant practice can give great results .
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardMedia component="img" src="/3.jpg" />
            <CardHeader title="Reduce anxiety  for Sports personal" />
            <CardContent>
              <Typography
                lineHeight={2}
                fontFamily="Literata"
                color="textSecondary">
                It's a combination of different techniqes compiled together to
                give instant relief and help improve concentration. Over
                constant practice can give great results .One can think of
                getting into future modules where things are designed as per
                particular problem area
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card sx={{ height: "100%" }}>
            <CardMedia component="img" src="/2.jpg" />
            <CardHeader title="Improve cardiovascular activity" />
            <CardContent>
              <Typography
                lineHeight={2}
                fontFamily="Literata"
                color="textSecondary">
                It's a combination of different techniqes compiled together to
                give instant relief and help improve general health . Over
                constant practice can give great results .
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default IndivisualGrowth;
