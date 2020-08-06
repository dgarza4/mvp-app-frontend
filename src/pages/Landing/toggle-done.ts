import { ITodo } from "interfaces";
import { config } from "config";

const toggleDone = (
  todo: ITodo,
  setStateTodo: (val: ITodo) => void,
  token: string | undefined
) => {
  if (!todo.id) {
    return;
  }

  const value = { ...todo, done: !todo.done };
  fetch(`${config.apiUrl}/todos/${todo.id}`, {
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
