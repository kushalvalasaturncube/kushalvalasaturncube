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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconSearch } from "@tabler/icons";
import { styled } from "@mui/material/styles";
// project imports

import MainCard from "ui-component/cards/MainCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { gridSpacing } from "store/constant";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-of-type td, &:last-of-type th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("BOM Token", 159, 6.0, 5, <RemoveRedEyeIcon />),
  createData("BOM", 237, 9.0),

  createData("Bitcoin", 356, 16.0),
  createData("BTC", 356, 16.0),
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
