import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  tableCellClasses,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { IconCurrencyBitcoin } from "@tabler/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import img2 from "../../assets/images/logo-bitcoin-4096.png";
import img3 from "../../assets/images/NF-RGB_APNG-Logo-300x300.png";
import img4 from "../../assets/images/tether-logo-png-transparent.png";
import img5 from "../../assets/images/usd-coin-usdc-logo.png";
import img6 from "../../assets/images/unnamed.png";
import img7 from "../../assets/images/solana.webp";
import Image from "mui-image";

// project imports

import MainCard from "ui-component/cards/MainCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { gridSpacing } from "store/constant";
import SubCard from "ui-component/cards/SubCard";

// table data
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-of-type td, &:last-of-type th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const successSX = { color: "success.dark" };
const errorSX = { color: "error.main" };

const rows = [
  createData(
    <Stack direction="row">
      <Image src={img7} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        Solana
      </Typography>
    </Stack>,
    <>
      <Typography>$789</Typography>
      <Typography>0.9876 BOM</Typography>
    </>,
    <>
      {" "}
      <Typography>$789</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> +78.631</Typography>
      </Stack>
    </>,
    "87%",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>
  ),
  createData(
    <Stack direction="row">
      <Image src={img4} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        Tether
      </Typography>
    </Stack>,
    <>
      <Typography>$789</Typography>
      <Typography>0.9876 Tether</Typography>
    </>,
    <>
      <Typography>$89</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropDownIcon sx={errorSX} />
        <Typography sx={errorSX}>- $5.631</Typography>
      </Stack>
    </>,
    " 90%",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>
  ),
  createData(
    <Stack direction="row">
      <Image src={img3} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        NFT
      </Typography>
    </Stack>,
    <>
      <Typography>$789</Typography>
      <Typography>0.9876 NFT</Typography>
    </>,
    <>
      <Typography>$9</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> +5.631</Typography>
      </Stack>
    </>,
    " 89%",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>
  ),
  createData(
    <Stack direction="row">
      <Image src={img5} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        USD
      </Typography>
    </Stack>,
    <>
      <Typography>$789</Typography>
      <Typography>0.9876 USD</Typography>
    </>,
    <>
      <Typography>$99</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> $89.631</Typography>
      </Stack>
    </>,
    "45%",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>
  ),
  createData(
    <Stack direction="row">
      <Image src={img2} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        Bitcoin
      </Typography>
    </Stack>,
    <>
      <Typography>$789</Typography>
      <Typography>0.9876 BTC</Typography>
    </>,
    <>
      <Typography>$99</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropDownIcon sx={errorSX} />
        <Typography sx={errorSX}>- $89.631</Typography>
      </Stack>
    </>,
    " 67%",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>
  ),
  createData(
    <Stack direction="row">
      <Image src={img6} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        BTC
      </Typography>
    </Stack>,
    <>
      <Typography>$789</Typography>
      <Typography>0.9876 BTC</Typography>
    </>,
    <>
      <Typography>$909</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> +67.631</Typography>
      </Stack>
    </>,
    "  78%",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>
  ),
];

// ==============================|| TABLE - BASIC ||============================== //

export default function Table1() {
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container spacing={gridSpacing} sx={{ paddingTop: "10px" }}>
      <Grid item xs={12}>
        <MainCard
          content={false}
          sx={{
            "&:hover": {
              border: `1px solid${theme.palette.primary.main}`,
            },
          }}
        >
          <Grid container spacing={gridSpacing} style={{ padding: "15px" }}>
            <Grid item xs={12} sm={5} md={5}>
              <Typography
                variant="h4"
                component="h4"
                paddingTop="15px"
                textAlign={matchDownXs ? "center" : "left"}
              >
                YOUR ASSETS
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              md={7}
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
            >
              <SubCard
                padding="10px"
                style={{
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h3"
                  align="center"
                  style={{
                    fontSize: "1.125rem",
                    width: "100%",
                    marginTop: "5px",
                  }}
                >
                  Total Balance:&nbsp;&nbsp;&nbsp; 50,000,000,000 USD
                </Typography>
              </SubCard>
            </Grid>
          </Grid>

          <TableContainer>
            <Table sx={{ minWidth: 350 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ pl: 3 }}>Name</StyledTableCell>
                  <StyledTableCell align="right">Balance</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Allocation</StyledTableCell>
                  <StyledTableCell sx={{ pr: 3 }} align="right">
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow hover key={row.name}>
                    <StyledTableCell sx={{ pl: 3 }} component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell sx={{ pr: 3 }} align="right">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>
      </Grid>
    </Grid>
  );
}
