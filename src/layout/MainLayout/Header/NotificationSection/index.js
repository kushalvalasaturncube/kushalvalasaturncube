import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  TextField,
  useMediaQuery,
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';

// assets
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import QR from '../../../../assets/images/QR-Code.png';
import { IconCopy } from '@tabler/icons';
// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);
  const [value] = useState(true);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
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
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down('md')]: {
            mr: 2,
          },
        }}
      >
        <Avatar
          variant='rounded'
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: 'all .2s ease-in-out',
            background:
              theme.palette.mode === 'dark'
                ? theme.palette.dark.main
                : theme.palette.secondary.light,
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.warning.dark
                : theme.palette.secondary.dark,
            '&[aria-controls="menu-list-grow"],&:hover': {
              background:
                theme.palette.mode === 'dark'
                  ? theme.palette.warning.dark
                  : theme.palette.secondary.dark,
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.grey[800]
                  : theme.palette.secondary.light,
            },
          }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          color='inherit'
        >
          <PhoneIphoneIcon stroke={1.5} size='1.3rem' />
        </Avatar>
      </Box>

      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
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
                offset: [matchesXs ? 5 : 0, 20],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions
              position={matchesXs ? 'top' : 'top-right'}
              in={open}
              {...TransitionProps}
            >
              <Paper>
                {open && (
                  <MainCard
                    border={false}
                    elevation={16}
                    content={false}
                    boxShadow
                    sx={{ width: '300px' }}
                    shadow={theme.shadows[16]}
                  >
                    <Grid container direction='column'>
                      <Grid item xs={12}>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='center'
                          sx={{ pt: 3, pb: 2 }}
                        >
                          <Grid direction='row' justifyContent='center'>
                            <ButtonGroup
                              disableElevation
                              //variant="outlined"
                              sx={{ mb: 2 }}
                            >
                              <Button
                                variant={value ? 'contained' : 'outlined'}
                                size='large'
                                // sx={{
                                //   bgcolor:
                                //     priceFlag === 'yearly'
                                //       ? 'primary.main'
                                //       : 'primary.200',
                                // }}
                                // onClick={() => setPriceFlag('yearly')}
                              >
                                iOS
                              </Button>
                              <Button
                                variant={!value ? 'contained' : 'outlined'}
                                size='large'
                                // sx={{
                                //   bgcolor:
                                //     priceFlag === 'monthly'
                                //       ? 'primary.main'
                                //       : 'primary.200',
                                // }}
                                // onClick={() => setPriceFlag('monthly')}
                              >
                                Android
                              </Button>
                            </ButtonGroup>
                          </Grid>
                          <Grid
                            container
                            xs={12}
                            md={12}
                            justifyContent='center'
                            sx={{ mb: 2, mx: 0, px: 0 }}
                          >
                            <img src={QR} alt='ime' width={'225px'} />
                          </Grid>
                          <Grid container spacing={2} sx={{ px: '35px' }}>
                            <Grid item xs>
                              {/* <FormProvider> */}
                              <TextField
                                fullWidth
                                size='small'
                                id='outlined-email-address'
                                placeholder='Enter Link'
                                value={'http://apps.apple.co'}
                              />

                              {/* </FormProvider> */}
                            </Grid>
                            <Grid item>
                              <IconCopy stroke={1.5} size='2.4rem' />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* <Divider /> */}
                    {/* <CardActions sx={{ p: 1.25, justifyContent: 'center' }}>
                      <Button size='small' disableElevation>
                        View All
                      </Button>
                    </CardActions> */}
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

export default NotificationSection;
