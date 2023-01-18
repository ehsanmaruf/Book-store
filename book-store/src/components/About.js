import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Book-Store Web Application Using Mern Stack.
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h4">
          By MARUF
        </Typography>
      </Box>
    </div>
  );
};

export default About;