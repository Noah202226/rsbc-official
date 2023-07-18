import { Check } from "@mui/icons-material";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import SectionImage from "../../public/business.jpg";

const Section = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} p={5}>
          <Typography variant="h2" fontSize={{ xs: 36, md: 56 }}>
            Why Choose Us?
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                Esteem spirit temper too say adieus who direct esteem.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                It esteems luckily or picture placing drawing.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                Apartments frequently or motionless on reasonable.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                Loans with quick approval.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                Customize a loan based on the amount.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                Good credit profile and you have built your loan.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                We provide online instant cash loans.
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Image
            alt="section-image"
            className="section-svg"
            src={SectionImage}
            width={500}
            height={500}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;
