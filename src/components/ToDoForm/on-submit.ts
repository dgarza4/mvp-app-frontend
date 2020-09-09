import { ITodo } from "interfaces";
import { config } from "config";

interface IData {
  [x: string]: any;
}

const onSubmit = (
  data: IData,
  todo: ITodo,
  setStateTodo: (todo: ITodo) => void,
  setIsEditing: (val: boolean) => void,
  token: string | undefined
) => {
  if (!token) {
    return;
  }
  const create = !todo.id;

  const { title } = data;
  if (title) {
    const baseUrl = `${config.apiUrl}/todo/v1/todos`;
    const url = todo.id ? `${baseUrl}/${todo.id}` : baseUrl;
    fetch(url, {
      method: create ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ title }),
    })
      .then(async (res) => {
        const resData = await res.json();
        window.analytics.track(create ? "Create Todo" : "Update Todo", {
          id: resData.id,
          title: resData.title,
          done: resData.done,
        });
        setStateTodo(resData);
        setIsEditing(false);
      })
      .catch(() => {
        setIsEditing(false);
      });
  } else {
    setIsEditing(false);
  }
};

export default onSubmit;
