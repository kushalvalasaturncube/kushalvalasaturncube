import React, { Fragment } from 'react';
import { Grid, Typography, Button, Stack, Box, Avatar } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MuiTypography from '@mui/material/Typography';
import HeightIcon from '@mui/icons-material/Height';
import { styled, useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HoverSocialCard from 'ui-component/cards/HoverSocialCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.common.black
      : theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(210.04deg, ${theme.palette.secondary.dark} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
        : theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140,
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(140.9deg, ${theme.palette.secondary.dark} -14.02%, rgba(144, 202, 249, 0) 85.50%)`
        : theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70,
    },
  },
}));
export default function SendSection() {
  const theme = useTheme();

  return (
    <Grid container justifyContent='center' xs={12} sx={{ maxHeight: '400px' }}>
      <Grid
        container
        xs={12}
        md={12}
        justifyContent='center'
        alignItems='center'
      >
        <Grid alignItems='center'>
          <MuiTypography variant='h1' gutterBottom>
            $ 500
          </MuiTypography>
          <Button
            // component={Link}
            // href='https://material-ui.com/store/items/berry-react-material-admin/'
            disableElevation
            variant='contained'
            color='success'
            type='button'
            // sx={{
            //   backgroundColor: 'rgb(103, 58, 183)',
            //   '&:hover': {
            //     backgroundColor: 'rgb(103, 58, 183)',
            //   },
            // }}
          >
            Send All
          </Button>
        </Grid>
        <Grid sx={{ justifyContent: 'center', ml: 2 }}>
          <Typography align='center' variant='h3'>
            USD
          </Typography>
          <HeightIcon />
          <Typography align='center' variant='h3'>
            BTC
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ mt: 2 }}>
        {/* ========================= */}
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction='column' sx={{ display: 'block' }}>
              <Grid item>
                <Grid container justifyContent='space-between'>
                  <Grid item></Grid>
                  <Grid item>
                    <Avatar
                      variant='rounded'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        backgroundColor:
                          theme.palette.mode === 'dark'
                            ? theme.palette.dark.dark
                            : theme.palette.secondary.dark,
                        color: theme.palette.secondary[200],
                        zIndex: 1,
                      }}
                      aria-controls='menu-earning-card'
                      aria-haspopup='true'
                    >
                      <CurrencyExchangeIcon fontSize='inherit' />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container sm={12}>
                  <Grid xs={12} sm={4}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 0,
                        mb: { xs: 0, md: 1 },
                      }}
                    >
                      Currency :
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 0,
                        mb: 1,
                      }}
                    >
                      Bitcoin
                    </Typography>
                  </Grid>
                  {/* </Grid> */}
                </Grid>
                <Grid container sm={12}>
                  {/* <Grid item> */}
                  <Grid xs={12} sm={4}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 0,
                        mb: { xs: 0, md: 1 },
                      }}
                    >
                      To :
                    </Typography>
                  </Grid>
                  <Grid xs={10} sm={6}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 0,
                        mb: 1,
                      }}
                    >
                      Mobile, Email, Address, NFT_id, NFT_key
                    </Typography>
                  </Grid>
                  {/* </Grid> */}
                </Grid>
                <Grid container sm={12}>
                  <Grid xs={12} sm={4} sx={{ mb: { xs: 0, md: 1 } }}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mt: 0,
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.text.secondary
                            : theme.palette.secondary[200],
                      }}
                    >
                      Notes :
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={8}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        mt: 0,
                        mb: 0,
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.text.secondary
                            : theme.palette.secondary[200],
                      }}
                    >
                      Optional message
                    </Typography>
                  </Grid>
                  {/* </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
        {/* ========================= */}
        <Grid xs={12} sx={{ my: 2 }}>
          <HoverSocialCard
            primary={
              <Fragment>
                <Grid container sm={12}>
                  <Grid xs={12} md={3}>
                    <MuiTypography
                      sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}
                    >
                      BTC Balance :
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
                      1.212544542 = $ 34,23,250
                    </MuiTypography>
                  </Grid>
                  <Grid xs={12} md={3}>
                    <MuiTypography sx={{ color: '#fff', fontWeight: 500 }}>
                      Fee :
                    </MuiTypography>
                  </Grid>
                  <Grid xs={12} md={9}>
                    <MuiTypography
                      sx={{ ml: { xs: 0, sm: 4 }, fontWeight: 500 }}
                    >
                      0.000015543 = $123
                    </MuiTypography>
                  </Grid>
                </Grid>
              </Fragment>
            }
            iconPrimary={MonetizationOnIcon}
            color={theme.palette.current.main}
          />
        </Grid>
        <Grid xs={12}>
          <Stack direction='row' justifyContent='center'>
            <AnimateButton>
              <Button
                disableElevation
                variant='outlined'
                color='secondary'
                type='submit'
                sx={{
                  width: { xs: '100%', md: 'fit-content' },
                  mb: 2,
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
