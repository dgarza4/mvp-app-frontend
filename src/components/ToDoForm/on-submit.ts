import { ITodo } from "interfaces";

interface IData {
  [x: string]: any;
}

const onSubmit = (
  data: IData,
  todo: ITodo,
  setStateTodo: (todo: ITodo) => void,
  setIsEditing: (val: boolean) => void
) => {
  const { title } = data;
  if (title) {
    const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;
    const url = todo.id ? `${baseUrl}/${todo.id}` : baseUrl;
    fetch(url, {
      method: todo.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then(async (res) => {
        const resData = await res.json();
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
