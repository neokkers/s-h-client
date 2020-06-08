import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import React from "react";

export const ProfileCardSkeleton = () => (
  <Box>
    <Typography variant="h4">
      <Skeleton />
    </Typography>
    <Skeleton />
    <Skeleton width={"50%"} />
    <Skeleton width={"30%"} />
    <Typography variant="h4">
      <Skeleton />
    </Typography>
    <Skeleton />
    <Skeleton width={"50%"} />
    <Skeleton width={"30%"} />
  </Box>
);
