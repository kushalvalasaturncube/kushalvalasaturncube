import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import useAuth from 'hooks/useAuth';
import User1 from 'assets/images/users/user-round.svg';

// assets
import {
  IconLogout,
  IconSettings,
  IconFileReport,
  IconHelp,
} from '@tabler/icons';
import useConfig from 'hooks/useConfig';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const { borderRadius } = useConfig();
  const { navType, onChangeMenuType } = useConfig();

  const [selectedIndex] = useState(-1);
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different components and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor:
            theme.palette.mode === 'dark'
              ? theme.palette.dark.main
              : theme.palette.primary.light,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.dark.main
              : theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light,
            },
          },
          '& .MuiChip-label': {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar
            src={User1}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer',
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            color='inherit'
            onClick={handleToggle}
          />
        }
        label={
          <IconSettings
            stroke={1.5}
            size='1.5rem'
            color={theme.palette.primary.main}
          />
        }
        variant='outlined'
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        color='primary'
      />

      <Popper
        placement='bottom'
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                {open && (
                  <MainCard
                    border={false}
                    elevation={16}
                    content={false}
                    boxShadow
                    shadow={theme.shadows[16]}
                  >
                    <Box sx={{ p: 2, pb: 0 }}>
                      <Stack>
                        <Stack
                          direction='row'
                          spacing={0.5}
                          alignItems='center'
                        >
                          {/* <Typography variant='h4'>Good Morning,</Typography> */}
                          <Typography
                            variant='h4'
                            sx={{ fontWeight: 400, mb: 1, ml: 2 }}
                          >
                            {user?.name}
                          </Typography>
                        </Stack>
                        <Typography
                          variant='h5'
                          component={'span'}
                          sx={{ mb: 2, ml: 2 }}
                        >
                          support@bomcoin.com
                        </Typography>
                      </Stack>

                      <Divider />
                    </Box>
                    <PerfectScrollbar
                      style={{
                        height: '100%',
                        maxHeight: 'calc(100vh - 250px)',
                        overflowX: 'hidden',
                      }}
                    >
                      <Box sx={{ p: 2, pt: 0 }}>
                        {/* <UpgradePlanCard />
                        <Divider /> */}
                        <Grid
                          // item
                          container
                          alignItems='center'
                          justifyContent='space-between'
                          sx={{ ml: 2, pt: 2, pb: 1 }}
                        >
                          <FormControl component='fieldset'>
                            {/* <FormLabel component='legend' >
                              Theme
                            </FormLabel> */}
                            <Typography variant='body2'>Theme</Typography>
                            <RadioGroup
                              row
                              aria-label='layout'
                              value={navType}
                              onChange={(e) => onChangeMenuType(e.target.value)}
                              name='row-radio-buttons-group'
                            >
                              <FormControlLabel
                                value='light'
                                control={<Radio />}
                                label='Light'
                                sx={{
                                  '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                  },
                                  '& .MuiFormControlLabel-label': {
                                    color: theme.palette.grey[900],
                                  },
                                }}
                              />
                              <FormControlLabel
                                value='dark'
                                control={<Radio />}
                                label='Dark'
                                sx={{
                                  '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                  },
                                  '& .MuiFormControlLabel-label': {
                                    color: theme.palette.grey[900],
                                  },
                                }}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Divider sx={{ m: 0, p: 0 }} />

                        <List
                          component='nav'
                          sx={{
                            pt: 0,
                            width: '100%',
                            maxWidth: 350,
                            minWidth: 300,
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: '10px',
                            [theme.breakpoints.down('md')]: {
                              minWidth: '100%',
                            },
                            '& .MuiListItemButton-root': {
                              mt: 0.5,
                            },
                          }}
                        >
                          <ListItemButton
                            sx={{
                              borderRadius: `${borderRadius}px`,
                              mb: '4px',
                            }}
                            selected={selectedIndex === 0}
                          >
                            <ListItemIcon>
                              <IconSettings stroke={1.5} size='1.3rem' />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant='body2'>
                                  Settings
                                </Typography>
                              }
                            />
                          </ListItemButton>
                          <Divider />

                          <ListItemButton
                            sx={{
                              borderRadius: `${borderRadius}px`,
                              mb: '4px',
                            }}
                            selected={selectedIndex === 0}
                          >
                            <ListItemIcon>
                              <IconFileReport stroke={1.5} size='1.3rem' />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant='body2'>Reports</Typography>
                              }
                            />
                          </ListItemButton>
                          <Divider />

                          <ListItemButton
                            sx={{
                              borderRadius: `${borderRadius}px`,
                              mb: '4px',
                            }}
                            selected={selectedIndex === 1}
                          >
                            <ListItemIcon>
                              <IconHelp stroke={1.5} size='1.3rem' />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Grid
                                  container
                                  spacing={1}
                                  justifyContent='space-between'
                                >
                                  <Grid item>
                                    <Typography variant='body2'>
                                      Help
                                    </Typography>
                                  </Grid>
                                  <Grid item></Grid>
                                </Grid>
                              }
                            />
                          </ListItemButton>
                          <Divider />

                          <ListItemButton
                            sx={{
                              borderRadius: `${borderRadius}px`,
                              mb: '4px',
                            }}
                            selected={selectedIndex === 4}
                            onClick={handleLogout}
                          >
                            <ListItemIcon>
                              <IconLogout stroke={1.5} size='1.3rem' />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant='body2'>
                                  Sign out
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </List>
                      </Box>
                    </PerfectScrollbar>
                  </MainCard>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
