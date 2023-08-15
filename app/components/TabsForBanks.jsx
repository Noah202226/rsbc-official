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

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        my={5}
        className="card"
      >
        <Image
          className="bank-logos"
          src={"/rsbc.jpg"}
          alt="security-bank-logo"
          width={100}
          height={100}
        />
        <Image
          className="bank-logos"
          src={"/east-west.jpg"}
          alt="east-west-logo"
          width={100}
          height={100}
        />
        <Image
          className="bank-logos"
          src={"/security-bank.jpg"}
          alt="security-bank-logo"
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

        <Typography
          variant="caption"
          fontStyle={"italic"}
          color={"orangered"}
          textAlign={"left"}
        >
          For Security Bank - Call center atleast 50k monthly basic
        </Typography>
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
            Credit Card holder with good credit history or any loan history with
            the bank for references
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
        </ul>

        <Typography
          variant="caption"
          fontStyle={"italic"}
          color={"orangered"}
          textAlign={"left"}
        >
          For Eastwest ITR or 3 months payslip
        </Typography>
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
        </ul>

        <Typography
          variant="caption"
          fontStyle={"italic"}
          color={"orangered"}
          textAlign={"left"}
        >
          For Eastwest and Security, ITR with AFS upon 2021 and 2022 or 3 months
          payslip
        </Typography>
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="card">
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
              background: "rgba(178,0,111,1)",
              width: { xs: "100%", md: "30%" },
            }}
            borderRadius={2}
          >
            Application Requirements
          </Typography>

          <Image
            src={"/east-west.jpg"}
            alt="east-west-logo"
            width={100}
            height={100}
          />
        </Stack>

        <Typography>
          • Must be a Filipino citizen or Foreign National permanently residing
          in the Philippines.
        </Typography>
        <Typography>
          • Must be at least 21 years old during application and not more than
          65 years old upon loan maturity Must have at least one fixed landline
          number (either home or business) and a mobile number. (Mobile number
          will not be accepted as a stand-alone contact number)
        </Typography>
        <Typography>
          • Gross (basic) monthly income (GMI) must be at least Phpl5,000 or
          basic annual income or must not be less than Php180,000
        </Typography>
        <Typography>
          • Atleast 20k and then annual gross income is 240k
        </Typography>
        <Typography>• Non- Carded or no Credit card is Accepted</Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(178,0,111,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Documentary Requirements
        </Typography>

        <Typography>
          • Completely filled-out EastWest Personal Loan Application Form
          Photocopy of at least one (1) valid digitized photo-bearing and
          signature-bearing 1.0.'s issued in the Philippines (i.e. Driver's
          License, Philippine Passport, Professional Regulation Commission (PRC)
          I.D .. 555 I.D .. TIN I.D .. Integrated Bar of the Philippines I.D ..
          and Unified 555/GSIS and TIN 1.0. (UMID). Company 1.0.'s issued by
          private entities or institutions registered with or supervised or
          regulated either by the BSP. SEC or IC may also be submitted.
        </Typography>
        <Typography>
          • (For Foreign Nationals Only) ANY of the following Proof of
          Residence: Alien Certificate of Registration, Immigrant Certificate of
          Registration or Photocopy of Resident Visa stamp on Passport
        </Typography>
        <Typography>• Proof of Income as follows:</Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(178,0,111,1)",
            width: { xs: "100%", md: "45%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          If employed, submit ANY of the following:
        </Typography>
        <Typography>• Photocopy of latest ITR/BIR Form 2316; or </Typography>
        <Typography>
          • Photocopy of latest three months pay slips; or
        </Typography>
        <Typography>
          • Valid Credit Card reference or its latest Credit Card Statement of
          Account
        </Typography>
        <Typography>
          • Other documents that may be required for further verification such
          as Certificate of Employment stating salary, status
          (regular/probationary/contractual/co-terminus etc.) position, and
          tenure of employment; and/or Proof of Billing
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(178,0,111,1)",
            width: { xs: "100%", md: "45%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          If self-employed, submit ALL of the following:
        </Typography>
        <Typography>
          • Photocopy of latest ITR/BIR Form 1701 and Audited Financial
          Statements
        </Typography>
        <Typography>
          • DTI Registration Certificate (for Sole Proprietorship) or SEC
          Registration Certificate with page stating shares owned by the
          applicant (for Partnerships or Corporations)
        </Typography>
        <Typography>
          • Valid Credit Card reference or its latest Credit Card Statement of
          Account
        </Typography>
        <Typography>
          • Other documents that may be required for further verification such
          as Business Permit or Mayor's Permit
        </Typography>
        <Typography
          variant="body"
          color={"orangered"}
          fontStyle={"italic"}
          textAlign={"end"}
          sx={{ textAlign: "right" }}
          my={2}
        >
          Note: All documents submitted/presented must be under the name of the
          applicant (correct spelling; include suffix if applicable).
        </Typography>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
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
              background: "rgba(44,59,85,1)",
              width: { xs: "100%", md: "30%" },
            }}
            borderRadius={2}
          >
            Are You Qualified?
          </Typography>

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

        <Typography>
          • Must be a Filipino citizen or Foreign National permanently residing
          in the Philippines.
        </Typography>
        <Typography>
          • Must be at least 21 years old during application and not more than
          65 years old upon loan maturity Must have at least one fixed landline
          number (either home or business) and a mobile number. (Mobile number
          will not be accepted as a stand-alone contact number)
        </Typography>
        <Typography>
          • Gross (basic) monthly income (GMI) must be at least Phpl5,000 or
          basic annual income or must not be less than Php180,000
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(44,59,85,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          DOCUMENTARY REQUIREMENTS
        </Typography>

        <Typography>
          • At least 21 years old but not more than 65 years old upon loan
          maturity
        </Typography>
        <Typography>• Filipino citizen</Typography>
        <Typography>• With office or residence landline</Typography>
        <Typography>
          • Residence or office is within Bank's service processing area
        </Typography>
        <Typography>• Latest COE</Typography>
        <Typography>• Gov’t Id and Company Id</Typography>
        <Typography>• 1 Month payslip</Typography>
        <Typography>• Metro manila 25k , outside metro manila- 20k</Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(44,59,85,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Employed
        </Typography>
        <Typography>
          • Regular and permanent with current employer and with total
          employment of at least one (1) year.
        </Typography>
        <Typography>
          • Minimun gross monthly income: <br /> -For Metro Manila: Php 15,000
          -For outside Metro Manila: Php 12,000
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(44,59,85,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Self Employed
        </Typography>
        <Typography>
          • With at least two (2) continuous years of profitable operations in
          the same line of business
        </Typography>
        <Typography>
          • Minimun gross monthly income: <br /> -For Metro Manila: Php 30,000
          -For outside Metro Manila: Php 25,000
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(44,59,85,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          REQUIREMENTS
        </Typography>
        <Typography>
          Duly filled - out and signed Loan Application Form
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(44,59,85,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Employed
        </Typography>

        <Typography>
          • Photocopy of company ID with clear photo and signature
        </Typography>
        <Typography>
          • Photocopy of one (1) valid government-issued photo ID with three (3)
          specimen signatures
        </Typography>
        <Typography>
          • Income Documents, any of the following:
          <br />
          &nbsp;&nbsp;&nbsp; • Latest one (1) month payslip with COE, or
          &nbsp;&nbsp;&nbsp; • Latest one (1) month payslip with ITR, or
          &nbsp;&nbsp;&nbsp; • Latest three (3) months payslip
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: 18, md: 28 }}
          color={"white"}
          textAlign={"center"}
          sx={{
            background: "rgba(44,59,85,1)",
            width: { xs: "100%", md: "30%" },
          }}
          borderRadius={2}
          my={{ xs: 2, md: 3 }}
        >
          Self-Employed
        </Typography>

        <Typography>
          • Photocopy of two (2) valid government-issued IDs with three (3)
          specimen signatures
        </Typography>
        <Typography>
          • Latest two (2) years Audited Financial Statements
        </Typography>
        <Typography>• SEC Registration / DTI Certificate</Typography>
        <Typography>• Business Permit / Mayor's Permit</Typography>
        <Typography>• Latest three (3) months bank statements</Typography>
        <Typography>
          • List of three (3) suppliers and three (3) customers with telephone
          numbers
        </Typography>
        <Typography>• Latest GSIS (if corporation)</Typography>

        <Typography
          variant="body"
          color={"orangered"}
          fontStyle={"italic"}
          textAlign={"end"}
          sx={{ textAlign: "right" }}
          my={2}
        >
          * Additional documents may be required by the bank to process the loan
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}
