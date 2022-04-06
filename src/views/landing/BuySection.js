import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import AnimateButton from 'ui-component/extended/AnimateButton';

export default function BuySection() {
  return (
    <Grid item xs={12} textAlign='center'>
      <MainCard
        sx={{ ml: { xs: 3, sm: 0 } }}
        title={
          <>
            <Typography variant='subtitle1'>BOM Token</Typography>
            <Typography variant='subtitle1'>$1.43 + 2.43%</Typography>
          </>
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                <InputLabel>BUY</InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} textAlign='left'>
                <Typography variant='subtitle1'>$ 500</Typography>
                <Typography variant='subtitle1'>0.455 BTC</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12} lg={4}>
                <InputLabel>WITH</InputLabel>
              </Grid>
              <Grid item xs={12} lg={8}>
                <FormControl sx={{ width: '100%', textAlign: 'left' }}>
                  <InputLabel id='age-select'>Currency</InputLabel>
                  <Select
                    labelId='age-select'
                    id='Currency'
                    name='Currency'
                    label='Currency'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>USD</MenuItem>
                    <MenuItem value={20}>INR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12} lg={4}>
                <InputLabel>To Address</InputLabel>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  fullWidth
                  placeholder='Address                                                                   '
                />
                {/* <FormHelperText>Please enter your Email</FormHelperText> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} spacing={2} sx={{ marginTop: '8px' }}>
            <Stack direction='row' justifyContent='center'>
              <AnimateButton>
                <Button
                  disableElevation
                  variant='contained'
                  color='secondary'
                  type='submit'
                >
                  Confirm
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1'>
              If you dont have your own wallet address
              <br />
              Please login and get your own wallet
            </Typography>
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
  );
}
