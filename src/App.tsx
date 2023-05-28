import { useState } from "react";

const App = () => {
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoItem = (e.target as HTMLFormElement).todo.value;
    if (!todoItem) return;
    setTodoItems([...todoItems, todoItem]);
    (e.target as HTMLFormElement).todo.value = "";
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        inset: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="todo" data-testid="todoItemLabel">
            Enter Todo Item
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            data-testid="todoItemInput"
          />
          <button
            type="submit"
            data-testid="todoItemSubmit"
            style={{
              marginTop: 5,
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <input
            data-testid="todoItemSearch"
            type="text"
            name="search"
            id="search"
            placeholder="Search for todo items"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            marginTop: 5,
          }}
        >
          <button
            data-testid="todoItemRemoveAll"
            onClick={() => setTodoItems([])}
          >
            Remove All
          </button>
        </div>
        <div>
          <h1>Todo Items</h1>
        </div>
        <ul>
          {todoItems.map((todoItem, index) => {
            if (searchValue && !todoItem.includes(searchValue)) return null;

            return (
              <li
                key={index}
                data-testid={`todoItem${todoItem.replace(/\s/g, "_")}`}
              >
                {todoItem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
