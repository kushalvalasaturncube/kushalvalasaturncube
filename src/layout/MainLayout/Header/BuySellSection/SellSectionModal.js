import React, { useState, Fragment } from 'react';
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  Link,
  Stack,
  Button,
} from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import bom_token from 'assets/images/BOM_short.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HeightIcon from '@mui/icons-material/Height';
import AnimateButton from 'ui-component/extended/AnimateButton';
import HoverSocialCard from 'ui-component/cards/HoverSocialCard';
import { useTheme } from '@mui/material/styles';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function SellSectionModal() {
  const theme = useTheme();
  const [step, setStep] = useState(1);
  return (
    <Grid container justifyContent='center'>
      {step === 1 && (
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          sx={{ mt: { md: 3, xs: 2.5 }, mb: { md: 3, xs: 2.5 } }}
        >
          <Divider />
          <Grid
            container
            sm={12}
            alignItems='center'
            component={Link}
            sx={{ my: 2, cursor: 'pointer', textDecoration: 'none' }}
            onClick={() => setStep(2)}
          >
            <Grid item>
              <Avatar
                alt='User 1'
                src={bom_token}
                sx={{ p: 0.6, backgroundColor: 'gainsboro' }}
              />
            </Grid>
            <Grid item xs zeroMinWidth sx={{ ml: 2 }}>
              <Typography align='left' variant='subtitle1'>
                BOM TOKEN
              </Typography>
              <Typography align='left' variant='subtitle2'>
                $1.43 (+2.34%)
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      )}
      {step === 2 && (
        <Fragment>
          <Grid
            container
            justifyContent='center'
            xs={12}
            sx={{ maxHeight: '400px' }}
          >
            <Grid
              container
              xs={12}
              justifyContent='center'
              alignItems='center'
              sx={{ mt: 1 }}
            >
              <KeyboardBackspaceIcon
                onClick={() => setStep(1)}
                sx={{ cursor: 'pointer' }}
              />
              <Grid
                sm={11}
                justifyContent='center'
                component={Link}
                sx={{ mt: 0, textDecoration: 'none' }}
              >
                <Grid
                  container
                  xs={12}
                  sm={10}
                  justifyContent='center'
                  sx={{ ml: 2 }}
                >
                  <Grid sx={{ align: 'center', justifyContent: 'center' }}>
                    <Avatar
                      alt='User 1'
                      src={bom_token}
                      align='center'
                      sx={{ p: 0.6, backgroundColor: 'gainsboro' }}
                    />
                  </Grid>
                  <Grid sx={{ ml: 2, cursor: 'pointer' }}>
                    <Typography align='center' variant='subtitle1'>
                      BOM TOKEN
                    </Typography>
                    <Typography align='center' variant='subtitle2'>
                      $1.43 (+2.34%)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ width: { xs: '100%', md: '50%' }, mt: 1 }} />

            <Grid
              sm={12}
              justifyContent='center'
              // component={Link}
              sx={{ mt: 1, cursor: 'pointer', textDecoration: 'none' }}
              onClick={() => setStep(2)}
            >
              <Grid
                container
                xs={12}
                md={12}
                justifyContent='center'
                alignItems='center'
              >
                <Grid alignItems='center'>
                  <MuiTypography variant='h2' gutterBottom>
                    $ 500
                  </MuiTypography>
                </Grid>
                <Grid sx={{ justifyContent: 'center', ml: 2 }}>
                  <Typography align='center' variant='subtitle2'>
                    USD
                  </Typography>
                  <HeightIcon />
                  <Typography align='center' variant='subtitle2'>
                    BTC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ margin: '8px 0 0 0', padding: 0 }}
              justifyContent='center'
            >
              <Stack
                justifyContent='center'
                sx={{ flexDirection: { xs: 'column', md: 'row' } }}
              >
                <AnimateButton>
                  <Button
                    disableElevation
                    variant='contained'
                    color='secondary'
                    type='submit'
                    sx={{
                      width: {
                        xs: '100%',
                        md: 'fit-content',
                        backgroundColor: 'rgb(103, 58, 183)',
                        '&:hover': {
                          backgroundColor: 'rgb(103, 58, 183)',
                        },
                      },
                      mr: { xs: 0, md: 2 },
                      mb: { xs: 1, md: 0 },
                    }}
                  >
                    $5.00 Minimum Sell
                  </Button>
                </AnimateButton>

                <AnimateButton>
                  <Button
                    disableElevation
                    variant='contained'
                    color='secondary'
                    type='submit'
                    sx={{
                      width: {
                        xs: '100%',
                        md: 'fit-content',
                        backgroundColor: 'rgb(103, 58, 183)',
                        '&:hover': {
                          backgroundColor: 'rgb(103, 58, 183)',
                        },
                      },
                    }}
                  >
                    $300 Maximum Sell
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Grid sx={{ py: 2 }}>
                <HoverSocialCard
                  primary={
                    <Fragment>
                      <MuiTypography variant='h4' sx={{ color: '#fff', mb: 1 }}>
                        BTC Balance : 1.212544542 = $34,23,250
                      </MuiTypography>
                      <MuiTypography variant='h4' sx={{ color: '#fff' }}>
                        Fee : 0.000125636 = $123
                      </MuiTypography>
                    </Fragment>
                  }
                  iconPrimary={MonetizationOnIcon}
                  color={theme.palette.secondary.main}
                />
              </Grid>
              <Grid xs={12} spacing={2}>
                <Stack direction='row' justifyContent='center'>
                  <AnimateButton>
                    <Button
                      disableElevation
                      variant='contained'
                      color='error'
                      type='submit'
                      sx={{
                        width: { xs: '100%', md: 'fit-content' },
                        mr: { xs: 0, md: 2 },
                      }}
                    >
                      Sell
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
              <Grid xs={12} sx={{ my: 2 }}>
                <Typography variant='subtitle1'>Want to know more?</Typography>
                <MuiTypography variant='body1'>
                  Upgrade your account to Gold level to unlock higher
                  transaction limits and more payment methods
                </MuiTypography>
              </Grid>
              <Grid xs={12} spacing={2}>
                <Stack direction='row' justifyContent='center'>
                  <AnimateButton>
                    <Button
                      disableElevation
                      variant='contained'
                      color='success'
                      type='submit'
                      sx={{
                        width: { xs: '100%', md: 'fit-content' },
                        mr: { xs: 0, md: 2 },
                      }}
                    >
                      Upgrade
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
}
