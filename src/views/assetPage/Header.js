import {
  Grid,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import CreditCardOutlined from '@mui/icons-material/CreditCardOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useTheme, styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.secondary.light} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
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

const Header = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <CardWrapper border={false} content={false}>
              <Box sx={{ p: 2 }}>
                <List sx={{ py: 0 }}>
                  <ListItem alignItems='center' disableGutters sx={{ py: 0 }}>
                    <ListItemAvatar>
                      <Avatar
                        variant='rounded'
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.largeAvatar,
                          backgroundColor: theme.palette.primary.main,
                          color: '#fff',
                        }}
                      >
                        <CreditCardOutlined fontSize='inherit' />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        py: 0,
                        mt: 0.45,
                        mb: 0.45,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      primary={
                        <Typography variant='h4' sx={{ color: '#fff' }}>
                          Connect a payment method
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant='subtitle2'
                          sx={{ color: 'primary.light', mt: 0.25 }}
                        >
                          Get ready to buy/sell assets
                        </Typography>
                      }
                    />{' '}
                    <ListItemText />
                    <ListItemText
                      sx={{
                        py: 0,
                        mt: 0.45,
                        mb: 0.45,
                        display: { xs: 'none', sm: 'block', md: 'block' },
                      }}
                      primary={
                        <Button
                          fullWidth
                          variant='outlined'
                          startIcon={<AddCircleOutlineIcon />}
                          sx={{
                            backgroundColor: '#fff',
                            color: theme.palette.secondary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.light,
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          Add payment method
                        </Button>
                      }
                    />
                  </ListItem>
                </List>
                <Button
                  fullWidth
                  variant='outlined'
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{
                    mt: 1,
                    display: { sm: 'none' },
                    backgroundColor: '#fff',
                    color: theme.palette.secondary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  Add payment method
                </Button>
              </Box>
            </CardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
