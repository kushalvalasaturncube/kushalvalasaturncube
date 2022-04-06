// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import MobileSection from './MobileSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

// assets
import { IconMenu2 } from '@tabler/icons';
import BuySellSection from './BuySellSection';
import SendRecieveSection from './SendRecieveSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box
          component='span'
          textAlign={'center'}
          sx={{
            display: { xs: 'none', md: 'block' },
            flexGrow: 1,
            padding: '0',
            margin: '0',
          }}
        >
          <LogoSection />
        </Box>
        <Avatar
          variant='rounded'
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            overflow: 'hidden',
            transition: 'all .2s ease-in-out',
            background:
              theme.palette.mode === 'dark'
                ? theme.palette.dark.main
                : theme.palette.secondary.light,
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
            '&:hover': {
              background:
                theme.palette.mode === 'dark'
                  ? theme.palette.secondary.main
                  : theme.palette.secondary.dark,
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.secondary.light
                  : theme.palette.secondary.light,
            },
          }}
          onClick={() => dispatch(openDrawer(!drawerOpen))}
          color='inherit'
        >
          <IconMenu2 stroke={1.5} size='1.3rem' />
        </Avatar>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <SendRecieveSection />
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <BuySellSection />
      </Box>
      {/* notification & profile */}
      <NotificationSection />
      <ProfileSection />
      {/* mobile header */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MobileSection />
      </Box>
    </>
  );
};

export default Header;
