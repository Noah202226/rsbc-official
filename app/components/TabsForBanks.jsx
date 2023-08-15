import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomizedAccordions from "./CustomizeAccordions";
import CustomizedAccordionsForDoctors from "./CustomizeAccordionsForDoctors";
import ColoredTabs from "./ColoredTabs";
import { Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 0.5, md: 3 } }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsForBanks() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    { fees: "Loan Processing Fee", amount: "Php1,900", id: 1 },
    {
      id: 2,
      fees: "Documentary Stamp Tax (DST) on  Promissory Note (PN) ",
      amount:
        "Php1 .50 for every Php200.00 of the approved loan amount or a fraction thereof for PNs greater than Php250,000 executed by an individual for personal use and not for the business with reference to RA 9243, Sec 199 - Paragraph D. (to be deducted from the loan proceeds)",
    },
    {
      id: 3,
      fees: "Contractual Interest Rate and Effective Interest Rate (EIR) ",
      amount:
        "The interest rates specified in Sections 6 and 7 of the Promissory Note. Per BSP Circular No. 730, EIR is the rate that exactly discounts estimated future cash flows through the life of the loan to the net amount of loan proceeds. It is the rate that best measures the true cost of credit. ",
    },
    {
      id: 4,
      fees: "Late Payment  Fee",
      amount:
        "Php500 or 8% of the past due amount, whichever is higher. This will be applied for every  month that the account is past due. ",
    },
    {
      id: 5,
      fees: "Processing Fee for Early Pay-Off of Loan",
      amount:
        "Php500 or 8% of the outstanding principal balance, whichever is higher",
    },
    {
      id: 6,
      fees: "Returned Check Fee",
      amount: "Php1 ,000 per returned check",
    },
    { id: 7, fees: "Check Retrieval and  Replacement Fee", amount: "Php200" },

    // Add more data items as needed
  ];

  return (
    <Box
      sx={{ width: "100%" }}
      mt={{ xs: 5, md: 5 }}
      className="card"
      id="multi-purpose-bank"
    >
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        sx={{ background: "rgba(250,0,0,1)", width: { xs: "100%", md: "50%" } }}
        borderRadius={2}
      >
        <Typography
          variant="h2"
          fontSize={{ xs: 24, md: 46 }}
          mt={{ xs: 2, md: 1 }}
          color={"white"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          MULTI PURPOSE BANKS
        </Typography>

        <Image src={"/bank.png"} alt="banks" width={50} height={50} />
      </Stack>

      <Box
        sx={{ borderBottom: 1, borderColor: "divider", my: 2 }}
        className="card"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          //   sx={{ justifyContent: "space-between" }}
          centered
          sx={{ justifyContent: "space-between" }}
        >
          <Tab
            label="CTBC"
            {...a11yProps(0)}
            sx={{ fontSize: { xs: 12, md: 26 }, textTransform: "capitalize" }}
          />
          <Tab
            label="EAST WEST"
            {...a11yProps(1)}
            sx={{ fontSize: { xs: 12, md: 26 }, textTransform: "capitalize" }}
          />
          <Tab
            label="SECURITY BANK"
            {...a11yProps(2)}
            sx={{ fontSize: { xs: 12, md: 26 }, textTransform: "capitalize" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ColoredTabs />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <Image
            src={"/east-west.jpg"}
            alt="east-west-logo"
            width={100}
            height={100}
          />
        </Stack>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(0,120,0,1) 10%, rgba(5,80,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Qualifications for Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Regular Employee (with atleast 6 months regular status)</li>
            <li>
              Basic Income should be 15k/Bankers, 20k/Private companies and
              25k/Call center
            </li>
            <li>With good credit history</li>
            <li>Call center atleast 50k monthly basic</li>
          </ul>
        </Stack>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(0,120,0,1) 10%, rgba(5,80,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Qualifications for Self Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Business existing for atleast 3yrs (if trading 5yrs)</li>
            <li>
              Credit Card holder with good credit history or any loan history
              with the bank for references
            </li>
            <li>Monthly income of Business atleast 50k a month</li>
          </ul>
        </Stack>

        <br />
        <br />
        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(130,0,0,1) 10%, rgba(120,0,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Requirements for Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Fill up application form</li>
            <li>Company ID + Goverment ID</li>
            <li>Latest one month payslip and Latest COE</li>
            <li>Latest POB</li>
            <li>ITR or 3 months payslip</li>
          </ul>
        </Stack>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(130,0,0,1) 10%, rgba(120,0,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Requirements for Self Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Fill up application form and DPA Form</li>
            <li>2 valid Goverment ID's with 3 signature segments</li>
            <li>DTI and Business Permit</li>
            <li>
              6 months passbook account or 6 months bank certificate with HDB
              (with letter of authority) for Bank checking
            </li>
            <li>List of suppliers / Customers</li>
            <li>Photos and Signage of Business</li>
            <li>ITR with AFS upon 2021 and 2022 or 3 months payslip</li>
          </ul>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <Stack alignItems={"center"}>
            <Image
              src={"/security-bank.jpg"}
              alt="security-bank-logo"
              width={100}
              height={100}
            />

            {/* <Button
              variant="contained"
              color="success"
              href={"/sb-form.pdf"}
              download
              target="_blank"
              sx={{ backgroundColor: "rgba(44,59,85,1)", my: 1 }}
            >
              Download PDF FORM
            </Button> */}
          </Stack>
        </Stack>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(0,120,0,1) 10%, rgba(5,80,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Qualifications for Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Regular Employee (with atleast 6 months regular status)</li>
            <li>
              Basic Income should be 15k/Bankers, 20k/Private companies and
              25k/Call center
            </li>
            <li>With good credit history</li>
          </ul>
        </Stack>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(0,120,0,1) 10%, rgba(5,80,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Qualifications for Self Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Business existing for atleast 3yrs (if trading 5yrs)</li>
            <li>
              Credit Card holder with good credit history or any loan history
              with the bank for references
            </li>
            <li>Monthly income of Business atleast 50k a month</li>
          </ul>
        </Stack>

        <br />
        <br />
        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(130,0,0,1) 10%, rgba(120,0,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Requirements for Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Fill up application form</li>
            <li>Company ID + Goverment ID</li>
            <li>Latest one month payslip and Latest COE</li>
            <li>Latest POB</li>
            <li>ITR or 3 months payslip</li>
          </ul>
        </Stack>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background:
              "linear-gradient(-90deg, rgba(130,0,0,1) 10%, rgba(120,0,0.1) 100%)",
            width: { xs: "100%", md: "50%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Requirements for Self Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Fill up application form and DPA Form</li>
            <li>2 valid Goverment ID's with 3 signature segments</li>
            <li>DTI and Business Permit</li>
            <li>
              6 months passbook account or 6 months bank certificate with HDB
              (with letter of authority) for Bank checking
            </li>
            <li>List of suppliers / Customers</li>
            <li>Photos and Signage of Business</li>
            <li>ITR with AFS upon 2021 and 2022 or 3 months payslip</li>
          </ul>
        </Stack>
      </CustomTabPanel>
    </Box>
  );
}
