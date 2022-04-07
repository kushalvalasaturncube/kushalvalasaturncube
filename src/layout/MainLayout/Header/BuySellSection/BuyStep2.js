import React, { Fragment } from 'react';
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  Link,
  Button,
  Stack,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import bom_token from 'assets/images/BOM_short.png';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MuiTypography from '@mui/material/Typography';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { styled, useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));
export default function BuyStep2(props) {
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
          sx={{ mt: 1 }}
        >
          <KeyboardBackspaceIcon
            onClick={() => props.changeStep(1)}
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
                <Avatar
                  alt='User 1'
                  src={bom_token}
                  align='center'
                  sx={{ p: 0.6, backgroundColor: 'gainsboro' }}
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
          // component={Link}
          sx={{ mt: 1, cursor: 'pointer', textDecoration: 'none' }}
          onClick={() => props.changeStep(2)}
        >
          <Grid
            container
            xs={12}
            md={12}
            justifyContent='center'
            alignItems='center'
          >
            <Grid alignItems='center'>{props.priceSection}</Grid>
            <Grid sx={{ justifyContent: 'center', ml: 2 }}>
              {props.currencySection}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            margin: '15px 0 0 0',
            padding: 0,
          }}
          justifyContent='center'
        >
          <Stack
            justifyContent='center'
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <AnimateButton>
              <Button
                variant='contained'
                type='submit'
                sx={{
                  width: { xs: '100%', md: 'fit-content' },
                  mr: { xs: 0, md: 2 },
                  mb: { xs: 1, md: 0 },
                  backgroundColor: 'rgb(103, 58, 183)',
                  '&:hover': {
                    backgroundColor: 'rgb(103, 58, 183)',
                  },
                }}
              >
                {props.minBtnTitle}
              </Button>
            </AnimateButton>
            <AnimateButton>
              <Button
                // disableElevation
                variant='contained'
                color='secondary'
                type='submit'
                sx={{
                  width: { xs: '100%', md: 'fit-content' },
                  backgroundColor: 'rgb(103, 58, 183)',
                  '&:hover': {
                    backgroundColor: 'rgb(103, 58, 183)',
                  },
                }}
              >
                {props.maxBtnTitle}
              </Button>
            </AnimateButton>
          </Stack>
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <Typography variant='subtitle1' align='center'>
            Max Card Limit : {props.cardLimit}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardWrapper border={false} content={false} sx={{ my: 2 }}>
            <Box sx={{ p: 2 }}>
              <List sx={{ py: 0, cursor: 'pointer' }} justifyContent='center'>
                <ListItem
                  alignItems='center'
                  justifyContent='center'
                  disableGutters
                  sx={{ py: 0 }}
                >
                  <ListItemAvatar>
                    <Avatar
                      variant='rounded'
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: '#fff',
                      }}
                    >
                      <CreditCardIcon fontSize='inherit' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      py: 0,
                      mt: 0.45,
                      mb: 0.45,
                    }}
                    primary={
                      <Typography variant='h4' sx={{ color: '#fff' }}>
                        Credit or Debit Card{' '}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </CardWrapper>

          <Grid xs={12} spacing={2}>
            <Stack direction='row' justifyContent='center'>
              <AnimateButton>
                <Button
                  variant='outlined'
                  color='secondary'
                  type='submit'
                  sx={{
                    width: { xs: '100%', md: 'fit-content' },
                    mt: 1,
                  }}
                  onClick={() => props.changeStep(3)}
                >
                  Continue
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
          <Grid xs={12} sx={{ my: 2 }}>
            <Typography variant='subtitle1'>Want to know more?</Typography>
            <MuiTypography variant='body1'>
              Upgrade your account to Gold level to unlock higher transaction
              limits and more payment methods
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
                    mb: 3,
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
  );
}
