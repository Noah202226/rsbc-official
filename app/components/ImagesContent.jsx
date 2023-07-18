import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImagesContent = () => {
  return (
    <Box my={3}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
      >
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Stack>
            <Image
              className="content"
              src={"/1.jpg"}
              alt="image1"
              width={300}
              height={300}
            />
            <Typography variant="caption" textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloremque mollitia facilis earum aperiam? Mollitia, corrupti
              excepturi! Cumque omnis laboriosam modi dolores nostrum alias
              nobis, delectus expedita, eveniet, itaque ipsa?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Image
            className="content"
            src={"/2.jpg"}
            alt="image1"
            width={300}
            height={300}
          />
          <Typography variant="caption" textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque mollitia facilis earum aperiam? Mollitia, corrupti
            excepturi! Cumque omnis laboriosam modi dolores nostrum alias nobis,
            delectus expedita, eveniet, itaque ipsa?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Image
            className="content"
            src={"/3.jpg"}
            alt="image1"
            width={300}
            height={300}
          />
          <Typography variant="caption" textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque mollitia facilis earum aperiam? Mollitia, corrupti
            excepturi! Cumque omnis laboriosam modi dolores nostrum alias nobis,
            delectus expedita, eveniet, itaque ipsa?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Image
            className="content"
            src={"/4.jpg"}
            alt="image1"
            width={300}
            height={300}
          />
          <Typography variant="caption" textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloremque mollitia facilis earum aperiam? Mollitia, corrupti
            excepturi! Cumque omnis laboriosam modi dolores nostrum alias nobis,
            delectus expedita, eveniet, itaque ipsa?
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImagesContent;
