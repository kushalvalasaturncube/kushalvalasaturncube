import React from "react";

import { Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
// project imports

import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import img1 from "../../assets/images/nft.jpg";
import { useTheme } from "@mui/material/styles";

// ==============================|| USER CARD STYLE 1 ||============================== //

const CardStyle1 = () => {
  const theme = useTheme();
  return (
    <>
      <MainCard
        sx={{
          "&:hover": {
            border: `1px solid${theme.palette.primary.main}`,
          },
        }}
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="unset"
            spacing={0}
          >
            <Grid item>
              <Typography variant="h3">Breaking News 1</Typography>
            </Grid>
          </Grid>
        }
      >
        <Grid item>
          <CardMedia
            component="img"
            height="150"
            image={img1}
            alt="Paella dish"
            style={{ borderRadius: "10px " }}
          />
        </Grid>
        <Grid item style={{ marginTop: "12px" }}>
          <Typography variant="p">
            NFTs are currently taking the digital art and collectibles world by
            storm. Digital artists are seeing their lives change thanks to huge
            sales to a new crypto-audience. And celebrities are joining in as
            they spot a new opportunity to connect with fans. But digital art is
            only one way to use NFTs.
          </Typography>
        </Grid>
      </MainCard>

      <MainCard
        sx={{
          marginTop: "10px",
          "&:hover": {
            border: `1px solid${theme.palette.primary.main}`,
          },
        }}
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item>
              <Typography variant="h3">Breaking News 2</Typography>
            </Grid>
          </Grid>
        }
      >
        <Grid item>
          <CardMedia
            component="img"
            height="150"
            image={img1}
            alt="Paella dish"
            style={{ borderRadius: "10px " }}
          />
        </Grid>
        <Grid item style={{ marginTop: "12px" }}>
          <Typography variant="p">
            NFTs are tokens that we can use to represent ownership of unique
            items. They let us tokenise things like art, collectibles, even real
            estate.
          </Typography>
        </Grid>
      </MainCard>
    </>
  );
};

export default CardStyle1;
