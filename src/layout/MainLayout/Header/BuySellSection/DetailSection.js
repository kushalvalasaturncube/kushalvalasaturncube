import { Grid, Tab, Tabs, Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { gridSpacing } from 'store/constant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import BuySectionModal from './BuySectionModal';
import SellSectionModal from './SellSectionModal';

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
export default function DetailSection() {
  const theme = useTheme();

  // set selected tab
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={12} md={12}>
        <Grid container spacing={gridSpacing}>
          <Box
            sx={{
              width: '100%',
              mt: 0,
              mb: 0,
              ml: 3,
              pr: 0,
              mr: 0,
            }}
          >
            {/* <MainCard justifyContent='center'> */}
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
                mb: 0,
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
              <BuySectionModal />
            </TabPanel>

            {/* tab - invoice */}
            <TabPanel value={value} index={1}>
              <SellSectionModal />
            </TabPanel>
            {/* </MainCard> */}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
