import { uniqueId } from "lodash";
import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState({
    id: uniqueId(),
    title: ""
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };

  const addTodo = (id, task) => {
    if (todo.title === "") {
      const Clone = [...data, todo];
      setData(Clone);
    } else if (todo.title !== "") {
      const filterData = data.map((item) => {
        if ((item.id, id)) {
          return { ...task, title: task };
        }
        return data;
      });
      setData([...data, filterData]);
    }
  };

  const editTodo = (id) => {
    const filterData = data.filter((item) => item.id !== id);
    const f = Object.assign({}, filterData);
    setTodo({ ...todo, f });
  };

  const deleteTodo = (id) => {
    const filterData = data.filter((item) => item.id === id);
    setData([...data, filterData]);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={() => addTodo()}>Add</button>
      </div>
      <div>
        {data?.length !== 0 ? (
          data?.map((item, index) => {
            return (
              <ul
                style={{
                  display: "flex",
                  backgroundColor: "lightcyan"
                }}
                key={index}
              >
                <li>{item.title}</li>
                <button onClick={editTodo(item.id, item.title)}>Edit</button>
                <button onClick={deleteTodo(item.id)}>Delete</button>
              </ul>
            );
          })
        ) : (
          <>
            <h1>The data is undefind</h1>
          </>
        )}
      </div>
    </>
  );
};

export default TodoList;
