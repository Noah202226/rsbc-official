import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomizedAccordions from "./CustomizeAccordions";
import CustomizedAccordionsForDoctors from "./CustomizeAccordionsForDoctors";
import { Stack } from "@mui/material";
import Image from "next/image";
import CustomizedAccordionsForBankers from "./CustomizeAccordionsForBankers";

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

export default function BasicTabs() {
  const [value2, setValue2] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} id="loan-types">
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
      >
        <Image
          src={"/rsbc.jpg"}
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
        Requirements for Employed Applicants:
      </Typography>

      <Stack mx={4}>
        <ul className="qualifications">
          <li>Fill up application form</li>
          <li>Company ID + Goverment ID</li>
          <li>Latest one month payslip and Latest COE</li>
          <li>Latest POB</li>
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
            Credit Card holder with good credit history or any loan history with
            the bank for references
          </li>
          <li>Monthly income of Business atleast 50k a month</li>
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
            6 months passbook account or 6 months bank certificate with ADB
            (with authorization letter) for Bank checking
          </li>
          <li>List of suppliers / Customers</li>
          <li>Photos and Signage of Business</li>
        </ul>
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
      >
        <Typography
          order={{ xs: 1, md: 0 }}
          my={{ xs: 2, md: 1 }}
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(250,0,0,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
        >
          Doctors Loan
        </Typography>
        <Image
          src={"/rsbc.jpg"}
          alt="security-bank-logo"
          width={100}
          height={100}
        />
      </Stack>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value2}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Employed Doctors"
            {...a11yProps(0)}
            sx={{ fontSize: { xs: 12, md: 24 }, textTransform: "capitalize" }}
          />
          <Tab
            label="Self Employed (Consultant)"
            {...a11yProps(1)}
            sx={{ fontSize: { xs: 12, md: 24 }, textTransform: "capitalize" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value2} index={0}>
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
          Qualifications
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Atleast 2 yrs License as Doctors</li>
            {/* <li>
              Basic Income should be 15k/Bankers, 20k/Private companies and
              25k/Call center
            </li>
            <li>With good credit history</li> */}
          </ul>

          {/* <Typography
            variant="caption"
            fontStyle={"italic"}
            color={"orangered"}
            textAlign={"left"}
          >
            For Security Bank - Call center atleast 50k monthly basic
          </Typography> */}
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
          Requirements for Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>PRC ID and Hospital ID</li>
            <li>Latest one month payslip</li>
          </ul>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value2} index={1}>
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
          Qualifications
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>Atleast 2 yrs License as Doctors and operating clinic</li>
            {/* <li>
              Basic Income should be 15k/Bankers, 20k/Private companies and
              25k/Call center
            </li>
            <li>With good credit history</li> */}
          </ul>

          {/* <Typography
            variant="caption"
            fontStyle={"italic"}
            color={"orangered"}
            textAlign={"left"}
          >
            For Security Bank - Call center atleast 50k monthly basic
          </Typography> */}
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
          Requirements for Employed Applicants:
        </Typography>

        <Stack mx={4}>
          <ul className="qualifications">
            <li>PRC ID and 1 valid Government ID with 3 signature</li>
            <li>
              3 months passbook savings account with authorization letter for
              bank checking
            </li>
          </ul>
        </Stack>
      </CustomTabPanel>
    </Box>
  );
}
