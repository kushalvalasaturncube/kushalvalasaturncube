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
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

const rows = [
  createData(
    "BOM Token",
    159,
    6.0,
    87,
    <IconButton>
      <RemoveRedEyeIcon />
    </IconButton>
  ),
  createData("BOM", 237, 9.0, 90),
  createData("BomNFT", 262, 16.0, 89),
  createData("USD", 305, 3.7, 45),
  createData("Bitcoin", 356, 16.0, 67),
  createData("BTC", 356, 16.0, 78),
];

// ==============================|| TABLE - BASIC ||============================== //

export default function Table1() {
  return (
    <Grid container spacing={gridSpacing} sx={{ paddingTop: "10px" }}>
      <Grid item xs={12}>
        <MainCard
          content={false}
          title={
            <Typography variant="h4" component="h4">
              YOUR ASSETS
            </Typography>
          }
          secondary={
            <SubCard
              style={{
                height: 60,
                display: { xs: "block", sm: "flex" },
                alignItems: "center",
                // paddingTop: "3px",
                width: { xs: "220px", md: "350px" },
              }}
            >
              <Typography
                variant="h3"
                align="center"
                style={{ fontSize: "1.125rem" }}
              >
                Total Balance:&nbsp;&nbsp;&nbsp; 50,000,000,000 USD
              </Typography>
            </SubCard>
          }
        >
          {/* table */}

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
