import React, { FC, useEffect, useState } from "react";
import { Box, Text } from "react-basic-blocks";
import HeaderTags from "components/HeaderTags";
import { fetchSingle } from "fetch-hooks-react";
import Loader from "components/Loader";
import ErrorNotice from "components/ErrorNotice";
import ToDoItem from "./ToDoItem";
import { config } from "config";
import { Add, Checkmark } from "grommet-icons";
import { IListResults, ITodo } from "interfaces";
import { useKeycloak } from "@react-keycloak/web";

const Landing: FC = () => {
  const [keycloak] = useKeycloak();
  const { data, isLoading, error } = fetchSingle<IListResults<ITodo>>(
    `${config.apiUrl}/todos?order=created_at:DESC&where=done:exact:true`,
    {
      headers: { Authorization: "Bearer " + keycloak.token },
    }
  );
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(data?.data || []);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  } else if (error || !data) {
    return <ErrorNotice />;
  }

  return (
    <>
      <HeaderTags title="Landing" description="This is the landing page" />
      <Box margin="20px">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="32px">TO DOs </Text>
          <Box
            cursor="pointer"
            onClick={() => setTodos([{} as ITodo, ...todos])}
          >
            <Add />
          </Box>
        </Box>
        {todos.map((todo, i) => (
          <ToDoItem key={`todo-${todo.id}-${i}`} todo={todo} />
        ))}
        {todos.length === 0 ? (
          <Box width="100%" alignItems="center" margin="50px 0">
            <Checkmark size="100px" color="green" />
            <Text fontSize="32px">All Done!</Text>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Landing;
