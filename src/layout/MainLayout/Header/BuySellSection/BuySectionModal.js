import React, { Fragment, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import BuyStep2 from './BuyStep2';
import BuyStep3 from './BuyStep3';
import BuyStep1 from './BuyStep1';
import HeightIcon from '@mui/icons-material/Height';
import MuiTypography from '@mui/material/Typography';

export default function BuySectionModal() {
  const [step, setStep] = useState(1);
  const [bottomStep, setBottomStep] = useState(1);
  const [currentSection, setCurrentSection] = useState('bom_token');

  const heading = currentSection === 'bom_token' ? 'BOM TOKEN' : 'BOM NFT';
  return (
    <Grid container justifyContent='center'>
      {step === 1 && bottomStep === 1 ? (
        <BuyStep1
          changeStep={(value) => {
            setStep(value);
            setBottomStep(1);
            setCurrentSection('bom_token');
          }}
          changeBottomStep={(value) => {
            setBottomStep(value);
            setCurrentSection('bom_nft');
            setStep(1);
          }}
        />
      ) : null}

      {/* step - 2 components */}
      {step === 2 && (
        <BuyStep2
          title={heading}
          changeStep={(value) => {
            currentSection === 'bom_token'
              ? setStep(value)
              : setBottomStep(value);
          }}
          priceSection={
            <Fragment>
              <MuiTypography variant='h2' gutterBottom>
                $ 500
              </MuiTypography>
              <Typography variant='subtitle2'>0.455 BTC</Typography>
            </Fragment>
          }
          currencySection={
            <Fragment>
              <Typography align='center' variant='subtitle2'>
                USD
              </Typography>
              <HeightIcon />
              <Typography align='center' variant='subtitle2'>
                BTC
              </Typography>
            </Fragment>
          }
          minBtnTitle={'$5.00 Minimum Buy'}
          maxBtnTitle={'$300 Maximum Buy'}
          cardLimit='$ 300'
        />
      )}
      {step === 3 && (
        <BuyStep3
          title={heading}
          changeStep={(value) => setStep(value)}
          dollarAmount={'$ 500'}
          currencyAmount={'0.455 BTC'}
        />
      )}

      {bottomStep === 2 && (
        <BuyStep2
          title={heading}
          changeStep={(value) => {
            currentSection === 'bom_token'
              ? setStep(value)
              : setBottomStep(value);
          }}
          priceSection={
            <Fragment>
              <MuiTypography variant='h2' gutterBottom>
                1
              </MuiTypography>
              <Typography variant='h5' align='center'>
                $ 1,000
              </Typography>
            </Fragment>
          }
          currencySection={
            <Fragment>
              <Typography align='center' variant='h5'>
                BOM NFT
              </Typography>
            </Fragment>
          }
          minBtnTitle={'Min : 1'}
          maxBtnTitle={'Max : 10'}
          cardLimit='$ 1000'
        />
      )}

      {bottomStep === 3 && (
        <BuyStep3
          title={heading}
          changeStep={(value) => {
            currentSection === 'bom_token'
              ? setStep(value)
              : setBottomStep(value);
          }}
          dollarAmount={'$ 1,000'}
          currencyAmount={'1 BOM NFT'}
        />
      )}
    </Grid>
  );
}
