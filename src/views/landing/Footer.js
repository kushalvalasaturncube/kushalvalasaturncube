// material-ui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  color: '#fff',
  background: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
  return (
    <>
      <FooterSubWrapper>
        <Container>
          <Typography variant='subtitle2' component='div' color='inherit'>
            &#169; BOM COIN
          </Typography>
        </Container>
      </FooterSubWrapper>
    </>
  );
};

export default FooterPage;
