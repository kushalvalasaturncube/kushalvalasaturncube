import React, { Fragment } from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import QR from '../../../../assets/images/QR-Code.png';
import ErrorIcon from '@mui/icons-material/Error';
import MuiTypography from '@mui/material/Typography';
import HoverSocialCard from 'ui-component/cards/HoverSocialCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function ReceiveSection() {
  const theme = useTheme();

  return (
    <Grid container justifyContent='center' xs={12} sx={{ maxHeight: '400px' }}>
      <Grid container xs={12} md={12} justifyContent='center'>
        <Grid item sx={{ backgroundColor: '#fff', p: 1 }}>
          <img src={QR} alt='ime' width={'180px'} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid item sx={{ mt: 2 }}>
          <HoverSocialCard
            primary={
              <Fragment>
                <Grid container sm={12}>
                  <Grid xs={12} md={3}>
                    <MuiTypography
                      sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}
                    >
                      Asset :
                    </MuiTypography>
                  </Grid>
                  <Grid xs={12} md={9}>
                    <MuiTypography
                      sx={{
                        ml: { xs: 0, sm: 4 },
                        color: '#fff',
                        fontWeight: 500,
                      }}
                    >
                      Bitcoin
                    </MuiTypography>
                  </Grid>
                </Grid>
                <Grid container sm={12}>
                  <Grid xs={12} md={3}>
                    <MuiTypography sx={{ color: '#fff', fontWeight: 500 }}>
                      BTC Address :
                    </MuiTypography>
                  </Grid>
                  <Grid xs={12} md={9}>
                    <MuiTypography
                      sx={{
                        ml: { xs: 0, sm: 4 },
                        color: '#fff',
                        fontWeight: 500,
                      }}
                    >
                      0RX54432JHOIS5451
                    </MuiTypography>
                  </Grid>
                </Grid>
              </Fragment>
            }
            iconPrimary={MonetizationOnIcon}
            color={theme.palette.current.main}
          />
        </Grid>

        <Grid item sm={12} alignItems='center'>
          <Stack
            direction='row'
            alignItems='center'
            sx={{ mt: 2, mb: 1, ml: 3 }}
          >
            <ErrorIcon />
            <Typography variant='subtitle1' sx={{ ml: 1 }}>
              Only Send Bitcoin (BTC) to this address
            </Typography>
          </Stack>
        </Grid>

        <Grid container sm={12} sx={{ ml: 3 }}>
          <Grid xs={12} md={3}>
            <MuiTypography variant='subtitle1' sx={{ display: 'inline' }}>
              BTC Balance :
            </MuiTypography>
          </Grid>
          <Grid xs={12} md={9}>
            <MuiTypography variant='body1' sx={{ ml: { xs: 0, sm: 2 } }}>
              1.212544542 = $34,23,250
            </MuiTypography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
