import { ITodo } from "interfaces";

const toggleDone = (
  todo: ITodo,
  setStateTodo: (val: ITodo) => void,
  token: string | undefined
) => {
  if (!todo.id) {
    return;
  }

  const value = { ...todo, done: !todo.done };
  fetch(`${process.env.REACT_APP_API_URL}/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(value),
  })
    .then(() => {
      setStateTodo(value);
    })
    .catch(() => {
      // handle err
    });
};

export default toggleDone;
