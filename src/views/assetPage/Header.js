import { Grid, Typography, Button } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
// project imports
import { gridSpacing } from 'store/constant';
import CreditCardOutlined from '@mui/icons-material/CreditCardOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Header = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <SubCard>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={2}
                  md={1}
                  sm={1}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <CreditCardOutlined
                    style={{
                      fontSize: '2.5rem',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={10}
                  md={7}
                  sm={7}
                  style={{
                    paddingLeft: '10px',
                  }}
                >
                  <Typography variant='subtitle1'>
                    Connect a payment method
                  </Typography>
                  <Typography variant='title1'>
                    Get ready to buy/sell assets
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} sm={4} style={{ marginTop: '5px' }}>
                  <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                    startIcon={<AddCircleOutlineIcon />}
                  >
                    Add payment method
                  </Button>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
