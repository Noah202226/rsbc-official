import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion
    className="card"
    disableGutters
    elevation={0}
    square
    {...props}
    TransitionProps={{ unmountOnExit: true }}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: { xs: theme.spacing(1), md: theme.spacing(2) },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "2px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordionsForBankers() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h5" fontSize={{ xs: 18, md: 28 }}>
            Bankers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span style={{ color: "green" }}>Qualifications:</span> 3 years of
            more Operating/ should be 40k above regular basic monthly income/
            Credit card holders with good Credit history. below.
          </Typography>
          <Typography>
            <span style={{ color: "green" }}>Interest rate:</span> For as low as
            1.39% per month-Non collateral & No Co-Maker
          </Typography>
          <ul style={{ marginTop: 10 }}>
            <li>
              <Typography>
                1. Professional Regulation Commission (PRC) ID back to back copy
              </Typography>
            </li>
            <li>
              <Typography>
                2. One Goverment primary ID (back to back) with 3 specimen
                signature
              </Typography>
            </li>
            <li>
              <Typography>3. One (1) month payslip</Typography>
            </li>
            <li>
              <Typography>4. Gov’t ID and Company Id</Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h5" fontSize={{ xs: 18, md: 28 }}>
            Non - Bankers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span style={{ color: "green" }}>Qualifications:</span> RRegular
            status/ should be 25K above regular basic monthly income/ Credit
            card holders with good Credit history. below.
          </Typography>
          <Typography>
            <span style={{ color: "green" }}>Interest rate:</span> For as low as
            1.49% per month-Non collateral & No Co-Maker
          </Typography>

          <ul style={{ marginTop: 10 }}>
            <li>
              <Typography>
                1. Professional Regulation Commission (PRC) ID back to back copy
              </Typography>
            </li>
            <li>
              <Typography>
                2. Hospital ID (back to back) with 3 specimen signature
              </Typography>
            </li>
            <li>
              <Typography>3. Two (2) Payslip</Typography>
            </li>
            <li>
              <Typography>4. Latest COE</Typography>
            </li>
            <li>
              <Typography>5. Gov’t Id and Company ID</Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
