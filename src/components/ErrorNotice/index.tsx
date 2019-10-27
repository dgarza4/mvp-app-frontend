import React, { FC } from "react";
import { Box, Text, BoxProps } from "grommet";
import { StatusCritical } from "grommet-icons";

type Props = BoxProps & {
  icon?: JSX.Element;
  color?: string;
  message?: string;
};

const ErrorNotice: FC<Props> = ({
  icon,
  message = "Something went wrong",
  color = "black",
  ...props
}) => (
  <Box pad="large" align="center" justify="center" flex {...props}>
    {icon ? icon : <StatusCritical size="large" color={color} />}
    <Text size="medium" margin={{ top: "medium" }} color={color}>
      {message}
    </Text>
  </Box>
);

export default ErrorNotice;
