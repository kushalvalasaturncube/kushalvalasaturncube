// import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Tab, Tabs } from '@mui/material';
// assets
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import AuthWrapper1 from 'views/pages/authentication/AuthWrapper1';
import BuySection from './BuySection';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

// ==============================|| LANDING - HEADER PAGE ||============================== //
// tab content
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HeaderPage = () => {
  const theme = useTheme();

  // set selected tab
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AuthWrapper1>
      <Grid container justifyContent='center' spacing={2}>
        <Grid
          item
          sm={10}
          md={5}
          sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 12.5, xs: 2.5 } }}
        >
          <Grid container spacing={gridSpacing}>
            <Box
              sx={{
                width: '100%',
                // textAlign: 'center',
                position: 'relative',
                mt: 8.75,
              }}
            >
              <MainCard justifyContent='center'>
                <Tabs
                  value={value}
                  indicatorColor='primary'
                  textColor='primary'
                  onChange={handleChange}
                  variant='scrollable'
                  aria-label='simple tabs example'
                  sx={{
                    '& a': {
                      minHeight: 'auto',
                      minWidth: 10,
                      px: 1,
                      py: 1.5,
                      mr: 2.25,
                      ml: { xs: 2.25, sm: 0 },
                      color: theme.palette.grey[600],
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    '& a.Mui-selected': {
                      color: theme.palette.primary.main,
                    },
                    '& a > svg': {
                      marginBottom: '0px !important',
                      marginRight: 1.25,
                    },
                    mb: 3,
                  }}
                >
                  <Tab
                    icon={<ShoppingCartIcon />}
                    component={Link}
                    to='#'
                    label='Buy'
                    {...a11yProps(0)}
                  />
                  <Tab
                    icon={<PriceCheckIcon />}
                    component={Link}
                    to='#'
                    label='Sell'
                    {...a11yProps(1)}
                  />
                </Tabs>

                {/* tab - details */}
                <TabPanel value={value} index={0}>
                  <BuySection />
                </TabPanel>

                {/* tab - invoice */}
                <TabPanel value={value} index={1}>
                  {/* <Invoice /> */}
                  <BuySection />
                </TabPanel>
              </MainCard>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default HeaderPage;
