import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import AnimateButton from "ui-component/extended/AnimateButton";
import MuiTypography from "@mui/material/Typography";
import HeightIcon from "@mui/icons-material/Height";
import SubCard from "ui-component/cards/SubCard";

export default function SendSection() {
  return (
    <Grid container justifyContent="center" xs={12} sx={{ maxHeight: "400px" }}>
      <Grid
        container
        xs={12}
        md={12}
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center">
          <MuiTypography variant="h1" gutterBottom>
            $ 500
          </MuiTypography>
          <Button
            // component={Link}
            // href='https://material-ui.com/store/items/berry-react-material-admin/'
            disableElevation
            variant="contained"
            color="secondary"
            type="button"
          >
            Send All
          </Button>
        </Grid>
        <Grid sx={{ justifyContent: "center", ml: 2 }}>
          <Typography align="center" variant="h3">
            USD
          </Typography>
          <HeightIcon />
          <Typography align="center" variant="h3">
            BTC
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <SubCard content={false} sx={{ p: 2, margin: "auto", my: 2 }}>
          <Grid container sm={12}>
            <Grid sm={4}>
              <Typography variant="subtitle1">Currency</Typography>
            </Grid>
            <Grid sm={8}>
              <Typography variant="subtitle1">Bitcoin</Typography>
            </Grid>
          </Grid>
          <Grid container sm={12}>
            <Grid sm={4}>
              <Typography variant="subtitle1">To</Typography>
            </Grid>
            <Grid sm={8}>
              <Typography variant="subtitle1">
                Mobile, Email, Address, NFT_id, NFT_key
              </Typography>
            </Grid>
          </Grid>
          <Grid container sm={12}>
            <Grid sm={4}>
              <Typography variant="subtitle1">Notes</Typography>
            </Grid>
            <Grid sm={8}>
              <Typography variant="subtitle1">Optional Message</Typography>
            </Grid>
          </Grid>
        </SubCard>
        <Grid xs={12} sx={{ my: 2, px: 2 }}>
          <Grid container sm={12}>
            <Grid xs={12} md={3}>
              <MuiTypography variant="subtitle1">BTC Balance :</MuiTypography>
            </Grid>
            <Grid xs={12} md={9}>
              <MuiTypography variant="body1" sx={{ ml: { xs: 0, sm: 2 } }}>
                1.212544542 = $ 34,23,250
              </MuiTypography>
            </Grid>
          </Grid>
          <Grid container sm={12}>
            <Grid xs={12} md={3}>
              <MuiTypography variant="subtitle1">Fee :</MuiTypography>
            </Grid>
            <Grid xs={12} md={9}>
              <MuiTypography variant="body1" sx={{ ml: { xs: 0, sm: 2 } }}>
                0.000015543 = $123
              </MuiTypography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} spacing={2}>
          <Stack direction="row" justifyContent="center">
            <AnimateButton>
              <Button
                disableElevation
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  width: { xs: "100%", md: "fit-content" },
                  mb: 1,
                }}
              >
                Continue
              </Button>
            </AnimateButton>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
