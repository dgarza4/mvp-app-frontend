import { ITodo } from "interfaces";
import { config } from "config";

const toggleDone = (
  todo: ITodo,
  setStateTodo: (val: ITodo) => void,
  token: string | undefined
) => {
  if (!todo.id || !token) {
    return;
  }

  const done = !todo.done;
  const value = { ...todo, done };
  fetch(`${config.apiUrl}/todo/v1/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(value),
  })
    .then((res) => {
      if (res.status < 400) {
        window.analytics.track(done ? "Todo Completed" : "Todo Undone", {
          id: todo.id,
          title: todo.title,
          done: !todo.done,
        });
        setStateTodo(value);
      } else {
        window.alert("Error checking todo");
      }
    })
    .catch(() => {
      window.alert("Error checking todo");
      // handle err
    });
};

export default toggleDone;
