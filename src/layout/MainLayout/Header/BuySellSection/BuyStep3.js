import React, { Fragment } from 'react';
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  Link,
  Button,
  Stack,
} from '@mui/material';
import bom_token from 'assets/images/BOM_short.png';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MuiTypography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EditIcon from '@mui/icons-material/Edit';
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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

export default function BuyStep3(props) {
  const theme = useTheme();
  return (
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
          sx={{ mt: 0 }}
        >
          <KeyboardBackspaceIcon
            onClick={() => props.changeStep(2)}
            sx={{ cursor: 'pointer' }}
          />
          <Grid
            sm={11}
            justifyContent='center'
            component={Link}
            sx={{ mt: 1, textDecoration: 'none' }}
          >
            <Grid container sm={10} justifyContent='center' sx={{ ml: 2 }}>
              <Grid sx={{ align: 'center', justifyContent: 'center' }}>
                <Avatar
                  alt='User 1'
                  src={bom_token}
                  align='center'
                  sx={{ p: 0.5, backgroundColor: 'gainsboro' }}
                />
              </Grid>
              <Grid sx={{ ml: 2, cursor: 'pointer' }}>
                <Typography align='center' variant='subtitle1'>
                  {props.title}
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
          sx={{ mt: 1, cursor: 'pointer', textDecoration: 'none' }}
        >
          <Grid
            container
            xs={12}
            md={12}
            justifyContent='center'
            alignItems='center'
          >
            <Grid alignItems='center' sx={{ mt: 2, mb: 3 }}>
              <MuiTypography
                variant='h2'
                gutterBottom
                sx={{ display: 'inline' }}
              >
                {props.dollarAmount}
              </MuiTypography>
              <MuiTypography
                variant='h2'
                gutterBottom
                sx={{ display: 'inline' }}
              >
                <ArrowRightAltIcon
                  sx={{
                    // display: 'inline',
                    color: '#000',
                    width: '50px',
                    height: '20px',
                  }}
                  // variant='h1'
                />
              </MuiTypography>
              <MuiTypography
                variant='h2'
                gutterBottom
                sx={{ display: 'inline' }}
              >
                {props.currencyAmount}
              </MuiTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CardWrapper border={false} content={false}>
            <Box sx={{ p: 2 }}>
              <Grid container direction='column' sx={{ display: 'block' }}>
                <Grid item>
                  <Grid container justifyContent='flex-end'>
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
                        <AccountBalanceWalletIcon fontSize='inherit' />
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
                        Asset :
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
                        BOM TOKEN
                      </Typography>
                    </Grid>
                    {/* </Grid> */}
                  </Grid>
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
                        BOM Address :
                      </Typography>
                    </Grid>
                    <Grid xs={10} sm={6}>
                      <Grid container alignItems='center'>
                        <Grid item>
                          <Typography
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 500,
                              mr: 1,
                              mt: 0,
                              mb: 1,
                            }}
                          >
                            Your Wallet (default)
                          </Typography>
                        </Grid>
                        <Grid item>
                          <EditIcon sx={{ cursor: 'pointer' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* </Grid> */}
                  </Grid>
                  <Grid container sm={12}>
                    <Grid xs={12}>
                      <Stack
                        direction='row'
                        alignItems='center'
                        sx={{ mt: 1, mb: 1 }}
                      >
                        <ErrorIcon />
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            mt: 0,
                            mb: 0,
                            ml: 2,
                            color:
                              theme.palette.mode === 'dark'
                                ? theme.palette.text.secondary
                                : theme.palette.secondary[200],
                          }}
                        >
                          Edit to send other's wallet directly
                        </Typography>
                      </Stack>
                    </Grid>
                    {/* </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </CardWrapper>

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
                    mt: 3,
                  }}
                >
                  Confirm
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
