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

export default function CustomizedAccordions() {
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
            For Employed Applications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span style={{ color: "green" }}>Qualifications:</span> Regular
            status/ should be 20K above regular basic monthly income/ Credit
            card holder with good Credit history and have the
            requirements listed below.
          </Typography>
          <Typography>
            <span style={{ color: "green" }}>Interest rate:</span> For as low as
            1.39% up to 1.99% per month-Non collateral &amp; No Co Maker
          </Typography>
          <ul style={{ marginTop: 10 }}>
            <li>
              <Typography>
                1.   Back to back copy of actual Company ID &amp; valid Govt id
                with 3 specimen signatures{" "}
              </Typography>
            </li>
            <li>
              <Typography>
                2.   Latest  Certificate of Employment (COE)
              </Typography>
            </li>
            <li>
              <Typography>3.   1 month latest payslip</Typography>
            </li>
            <li>
              <Typography>
                4.   Latest proof of billing under current residence address
                (electric bill, water bill, phone bill, etc.)
              </Typography>
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
            For Self - Employed Applications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span style={{ color: "green" }}>Qualifications:</span> Regular
            status/ should be 20K above regular basic monthly income/ Credit
            card holder with good Credit history and have the
            requirements listed below.
          </Typography>
          <Typography>
            <span style={{ color: "green" }}>Interest rate:</span> For as low as
            1.39% up to 1.99% per month-Non collateral &amp; No Co Maker
          </Typography>
          <ul style={{ marginTop: 10 }}>
            <li>
              <Typography>
                1.   Photocopy of 2 valid government ids with 3 specimen
                signatures of Applicant
              </Typography>
            </li>
            <li>
              <Typography>
                2.   DTI  with Certificate of Registration &amp; BUSINESS PERMIT
              </Typography>
            </li>
            <li>
              <Typography>
                3.   Audited Financial Statement (AFS) Year 2022 with BIR / Bank
                Receipt
              </Typography>
            </li>
            <li>
              <Typography>
                4.   Bank Certificate with 6 months ADB (6 mos latest Bank
                Statements /Passbook accounts) Authorization Letter of client
                for Bank checking
              </Typography>
            </li>
            <li>
              <Typography>
                5.   Latest utility bill under residence address (Electric bill,
                Water bill, phone bill,etc.)
              </Typography>
            </li>
            <li>
              <Typography>
                6.   Lists of Supplier and Clients/Customers with Contact
                persons and contact numbers <br />
                (3 for Suppliers/3Names for Customers/Clients with landline
                &amp; mobile number,position with the Company and office
                address)
              </Typography>
            </li>
            <li>
              <Typography>
                7.   Photos/pictures with signage of Business
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
