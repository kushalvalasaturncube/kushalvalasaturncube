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
import Avatar3 from 'assets/images/users/avatar-3.png';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MuiTypography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SubCard from 'ui-component/cards/SubCard';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EditIcon from '@mui/icons-material/Edit';
import ErrorIcon from '@mui/icons-material/Error';

export default function BuyStep3(props) {
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
          sx={{ mt: 1 }}
        >
          <KeyboardBackspaceIcon
            onClick={() => props.changeStep(2)}
            sx={{ cursor: 'pointer' }}
          />
          <Grid
            sm={11}
            justifyContent='center'
            component={Link}
            sx={{ mt: 0, textDecoration: 'none' }}
          >
            <Grid container sm={10} justifyContent='center' sx={{ ml: 2 }}>
              <Grid sx={{ align: 'center', justifyContent: 'center' }}>
                <Avatar alt='User 1' src={Avatar3} align='center' />
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
          // component={Link}
          sx={{ mt: 1, cursor: 'pointer', textDecoration: 'none' }}
        >
          <Grid
            container
            xs={12}
            md={12}
            justifyContent='center'
            alignItems='center'
          >
            {/* <Grid alignItems='center'>
                  <MuiTypography variant='h2' gutterBottom>
                    $ 500
                  </MuiTypography>
                  <Typography variant='subtitle2'>0.455 BTC</Typography>
                </Grid> */}
            <Grid alignItems='center' sx={{ mt: 2, mb: 1 }}>
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
          <SubCard
            content={false}
            sx={{ p: 2, margin: 'auto', my: 2, maxWidth: 500, flexGrow: 1 }}
          >
            <Grid sm={12} container>
              <Grid item sm={4} sx={{ mb: 1 }}>
                <Typography variant='subtitle1'>Asset</Typography>
              </Grid>
              <Grid item sm={8} sx={{ mb: 1 }}>
                <Stack direction='row' alignItems='center'>
                  {/* <CurrencyBitcoinOutlinedIcon /> */}
                  <Typography variant='subtitle1' sx={{ ml: 1 }}>
                    BOM TOKEN
                  </Typography>
                </Stack>
              </Grid>
              <Grid item sm={4}>
                <Typography variant='subtitle1'> BOM Address</Typography>
              </Grid>
              <Grid item sm={8} alignItems='center'>
                <Stack direction='row' alignItems='center' spacing={0.5}>
                  <Typography variant='subtitle1'>
                    Your Wallet (default)
                  </Typography>
                  <EditIcon sx={{ cursor: 'pointer' }} />
                </Stack>
              </Grid>
              <Grid item sm={12} alignItems='center'>
                <Stack direction='row' alignItems='center' sx={{ mt: 1 }}>
                  <ErrorIcon />
                  <Typography variant='subtitle1' sx={{ ml: 1 }}>
                    Edit to send other's wallet directly
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            {/* <Typography variant='subtitle1' align='center' sx={{ ml: 1 }}>
                    Credit or Debit Card
                  </Typography> */}
          </SubCard>
          <Grid xs={12} spacing={2}>
            <Stack direction='row' justifyContent='center'>
              <AnimateButton>
                <Button
                  disableElevation
                  variant='contained'
                  color='secondary'
                  type='submit'
                  sx={{
                    width: { xs: '100%', md: 'fit-content' },
                    mr: { xs: 0, md: 2 },
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
