import React, { FC } from "react";
import { Box, BoxProps } from "grommet";
import { BeatLoader } from "react-spinners";

type Props = BoxProps & {
  size?: number;
  color?: string;
};

const Loader: FC<Props> = ({ size = 20, color, ...props }) => (
  <Box pad="large" align="center" justify="center" flex {...props}>
    <BeatLoader loading size={size} color="grey" />
  </Box>
);

export default Loader;
