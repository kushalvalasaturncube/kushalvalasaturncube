import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputAdornment,
  OutlinedInput,
  TextField,
  MenuItem,
  useMediaQuery,
  tableCellClasses,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconSearch } from "@tabler/icons";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// project imports

import MainCard from "ui-component/cards/MainCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { gridSpacing } from "store/constant";
import img6 from "../../assets/images/unnamed.png";
import img2 from "../../assets/images/logo-bitcoin-4096.png";
import img4 from "../../assets/images/tether-logo-png-transparent.png";
import img7 from "../../assets/images/solana.webp";
import Image from "mui-image";

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
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-of-type td, &:last-of-type th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, icon) {
  return { name, calories, fat, carbs, protein, icon };
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
    159,
    <>
      <Typography>$789</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> +78.631</Typography>{" "}
      </Stack>
    </>,
    "$5B",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>,
    <Checkbox
      icon={<StarOutlineIcon />}
      checkedIcon={<StarIcon color="primary" />}
    />
  ),
  createData(
    <Stack direction="row">
      <Image src={img4} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        Tether
      </Typography>
    </Stack>,
    237,
    <>
      <Typography>$89</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropDownIcon sx={errorSX} />
        <Typography sx={errorSX}>- $5.631</Typography>
      </Stack>
    </>,
    "$7B",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>,
    <Checkbox
      icon={<StarOutlineIcon />}
      checkedIcon={<StarIcon color="primary" />}
    />
  ),

  createData(
    <Stack direction="row">
      <Image src={img2} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        Bitcoin
      </Typography>
    </Stack>,
    356,
    <>
      <Typography>$9</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> +5.631</Typography>
      </Stack>
    </>,
    "$8B",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>,
    <Checkbox
      icon={<StarOutlineIcon />}
      checkedIcon={<StarIcon color="primary" />}
    />
  ),
  createData(
    <Stack direction="row">
      <Image src={img6} height="30px" width="30px" />
      <Typography marginTop="5px" marginLeft={2}>
        BTC
      </Typography>
    </Stack>,
    356,
    <>
      <Typography>$99</Typography>
      <Stack direction="row" justifyContent="end">
        <ArrowDropUpIcon color={"success"} />
        <Typography sx={successSX}> $89.631</Typography>
      </Stack>
    </>,
    "$9B",
    <IconButton color="primary">
      <RemoveRedEyeIcon />
    </IconButton>,
    <Checkbox
      icon={<StarOutlineIcon />}
      checkedIcon={<StarIcon color="primary" />}
    />
  ),
];

const status = [
  {
    value: "Watch List",
    label: "Watch List",
  },
];

const data = [
  {
    value: "1 hr",
    label: "1 hr",
  },
];

// ==============================|| TABLE - BASIC ||============================== //

export default function Table2() {
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down("sm"));

  const [value] = React.useState("Watch List");
  const [time] = React.useState("1 hr");
  const [search, setSearch] = React.useState("");
  const handleSearch = async (event) => {
    const newString = event?.target.value;
    setSearch(newString);
  };
  return (
    <Grid container spacing={gridSpacing} sx={{ paddingTop: "10px" }}>
      <Grid item xs={12}>
        <MainCard
          sx={{
            "&:hover": {
              border: `1px solid${theme.palette.primary.main}`,
            },
          }}
          fontFamily="sans-serif"
          content={false}
          title={
            <Typography variant="h4" component="h4">
              All ASSETS
            </Typography>
          }
        >
          <Grid container spacing={1} sx={{ padding: "20px" }}>
            <Grid item xs={12} md={6} sm={6}>
              <OutlinedInput
                id="input-search-card-style1"
                placeholder="Search"
                value={search}
                fullWidth={matchDownXs ? true : false}
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="1rem" />
                  </InputAdornment>
                }
                size="small"
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sm={3}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "10px",
              }}
            >
              <TextField
                select
                value={time}
                fullWidth={matchDownXs ? true : false}
                sx={{ height: "10px" }}
                size="small"
              >
                {data.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              sm={3}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingLeft: "0px",
              }}
            >
              <TextField select value={value} fullWidth={true} size="small">
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <TableContainer>
            <Table
              sx={{ minWidth: 350, borderRadius: "50px" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ pl: 3 }}>Name</StyledTableCell>
                  <StyledTableCell align="right">Past 24h</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Market cap</StyledTableCell>
                  <StyledTableCell sx={{ pr: 3 }} align="right">
                    Action
                  </StyledTableCell>
                  <StyledTableCell align="right">Watch</StyledTableCell>
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
                    <StyledTableCell align="right">{row.icon}</StyledTableCell>
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
