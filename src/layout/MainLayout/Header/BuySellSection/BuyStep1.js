import React from 'react';
import { Grid, Avatar, Typography, Divider, Link } from '@mui/material';
import bom_nft from 'assets/images/BOM_NFT.png';
import bom_token from 'assets/images/BOM_short.png';
export default function BuyStep1(props) {
  return (
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
        onClick={() => props.changeStep(2)}
      >
        <Grid item>
          <Avatar
            alt='User 1'
            src={bom_token}
            sx={{ p: 0.3, backgroundColor: 'gainsboro' }}
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
      <Grid
        container
        sm={12}
        alignItems='center'
        component={Link}
        sx={{ my: 2, cursor: 'pointer', textDecoration: 'none' }}
        onClick={() => props.changeBottomStep(2)}
      >
        <Grid item>
          <Avatar
            alt='User 1'
            src={bom_nft}
            sx={{ p: 0.6, backgroundColor: 'gainsboro' }}
          />
        </Grid>
        <Grid item xs zeroMinWidth sx={{ ml: 2 }}>
          <Typography align='left' variant='subtitle1'>
            BOM NFT
          </Typography>
          <Typography align='left' variant='subtitle2'>
            $1000 (+1.23%)
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
}
