import React, { FC, useState } from "react";
import { Box, Text } from "react-basic-blocks";
import { Checkbox, CheckboxSelected } from "grommet-icons";
import ToDoForm from "components/ToDoForm";
import { ITodo } from "interfaces";
import toggleDone from "./toggle-done";
import { GetJwt } from "components/CognitoAuth";

interface IToDoItemProps {
  todo: ITodo;
}

const ToDoItem: FC<IToDoItemProps> = ({ todo }) => {
  const [stateTodo, setStateTodo] = useState<ITodo>(todo);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const jwt = GetJwt();

  return (
    <Box flexDirection="row" cursor="pointer">
      <Box
        margin="20px 15px 20px 0"
        onClick={() => toggleDone(stateTodo, setStateTodo, jwt)}
      >
        {stateTodo?.done ? <CheckboxSelected /> : <Checkbox />}
      </Box>
      <Box
        padding="20px 0"
        width="100%"
        borderBottom="1px solid gray"
        onClick={() => (isEditing ? null : setIsEditing(true))}
      >
        {isEditing ? (
          <ToDoForm
            todo={stateTodo as ITodo}
            setIsEditing={setIsEditing}
            setStateTodo={setStateTodo}
          />
        ) : (
          <Text
            fontSize="18px"
            style={{
              textDecorationLine: stateTodo?.done ? "line-through" : "",
            }}
          >
            {stateTodo?.title}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default ToDoItem;
