import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import QR from '../../../../assets/images/QR-Code.png';
import { Box } from '@mui/system';
import ErrorIcon from '@mui/icons-material/Error';
import MuiTypography from '@mui/material/Typography';

export default function ReceiveSection() {
  return (
    <Grid container justifyContent='center' xs={12} sx={{ maxHeight: '400px' }}>
      <Grid container xs={12} md={12} justifyContent='center' sx={{ mb: 1 }}>
        <img src={QR} alt='ime' width={'180px'} />
      </Grid>
      <Grid item xs={12}>
        <Box>
          <SubCard content={false} sx={{ p: 2, margin: 'auto', my: 1 }}>
            <Grid container sm={12}>
              <Grid xs={12} sm={4}>
                <Typography variant='subtitle1'>Asset</Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant='body1'>Bitcoin</Typography>
              </Grid>
            </Grid>
            <Grid container sm={12}>
              <Grid xs={12} sm={4}>
                <Typography variant='subtitle1'>BTC Address</Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant='body1'>0RX54432JHOIS5451</Typography>
              </Grid>
            </Grid>
          </SubCard>
        </Box>
        <Grid item sm={12} alignItems='center'>
          <Stack
            direction='row'
            alignItems='center'
            sx={{ mt: 2, mb: 1, ml: 2 }}
          >
            <ErrorIcon />
            <Typography variant='subtitle1' sx={{ ml: 1 }}>
              Only Send Bitcoin (BTC) to this address
            </Typography>
          </Stack>
        </Grid>

        <Grid container sm={12} sx={{ ml: 2 }}>
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
