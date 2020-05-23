import React, { FC } from "react";
import { Box, Text, BoxProps } from "react-basic-blocks";
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
  <Box padding="40px" alignItems="center" justifyContent="center" {...props}>
    {icon ? icon : <StatusCritical size="large" color={color} />}
    <Text fontSize="medium" margin="20px 0" color={color}>
      {message}
    </Text>
  </Box>
);

export default ErrorNotice;
