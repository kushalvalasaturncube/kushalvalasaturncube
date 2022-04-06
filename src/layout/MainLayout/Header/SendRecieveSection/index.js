import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Modal,
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import DetailSection from './DetailSection';

const Body = React.forwardRef(({ modalStyle, handleClose }, ref) => (
  <div ref={ref} tabIndex={-1}>
    <MainCard
      // style={modalStyle}
      sx={{
        position: 'absolute',
        width: { xs: 280, md: 500, lg: 550 },
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      content={false}
    >
      <CardContent
        sx={{
          minHeight: '350px',
          maxHeight: '450px',
          overflow: 'auto',
          width: '100%',
        }}
      >
        <DetailSection />
      </CardContent>
      <Divider
        sx={{
          marginLeft: 3,
          marginRight: 3,
          // marginL: 10,
        }}
      />
      <CardActions
        sx={{
          float: 'right',
        }}
      >
        <Button
          // component={Link}
          // href='https://material-ui.com/store/items/berry-react-material-admin/'
          disableElevation
          variant='contained'
          color='secondary'
          type='button'
          onClick={handleClose}
        >
          Close
        </Button>
      </CardActions>
    </MainCard>
  </div>
));

Body.propTypes = {
  modalStyle: PropTypes.object,
  handleClose: PropTypes.func,
};
// ==============================|| NOTIFICATION ||============================== //

const SendRecieveSection = () => {
  const theme = useTheme();

  // const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */

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
        <Grid container justifyContent='flex-end'>
          <Button
            // component={Link}
            // href='https://material-ui.com/store/items/berry-react-material-admin/'
            disableElevation
            variant='contained'
            color='secondary'
            type='button'
            onClick={handleOpen}
          >
            Send / Receive
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
            sx={{ height: '100%' }}
          >
            <Body handleClose={handleClose} />
          </Modal>
        </Grid>
      </Box>
    </>
  );
};

export default SendRecieveSection;
