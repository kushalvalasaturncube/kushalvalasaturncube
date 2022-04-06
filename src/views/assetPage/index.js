// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import Header from './Header';
import Table1 from './Table1';
import Table2 from './Table2';
import BreakingNewsPage from './BreakingNewsPage';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={9} sm={12}>
            <Header />
            <Table1 />
            <Table2 />
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <BreakingNewsPage />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
