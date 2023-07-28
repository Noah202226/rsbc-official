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
          Loan Types
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
            label="Salary Loan"
            {...a11yProps(0)}
            sx={{ fontSize: { xs: 12, md: 26 }, textTransform: "capitalize" }}
          />
          <Tab
            label="Doctors Loan"
            {...a11yProps(1)}
            sx={{ fontSize: { xs: 12, md: 26 }, textTransform: "capitalize" }}
          />
          <Tab
            label="Bankers Loan"
            {...a11yProps(2)}
            sx={{ fontSize: { xs: 12, md: 26 }, textTransform: "capitalize" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value2} index={0}>
        <CustomizedAccordions />
      </CustomTabPanel>
      <CustomTabPanel value={value2} index={1}>
        <CustomizedAccordionsForDoctors />
        <Typography
          variant="body"
          color={"orangered"}
          fontStyle={"italic"}
          textAlign={"end"}
          sx={{ textAlign: "right" }}
          my={2}
        >
          Notes* for doctors loan, we don't have a 12 month term to pay, you
          could choose either 18 months to 3 years instead.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value2} index={2}>
        <CustomizedAccordionsForBankers />
      </CustomTabPanel>
    </Box>
  );
}
