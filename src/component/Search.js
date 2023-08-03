import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";

const Search = () => {
  const [hide, setHide] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filters = data.filter(({ title }) => {
    return title.toUpperCase().includes(value.toUpperCase());
  });

  console.log(filters);

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setHide(false)}>Hide</button>
        <button onClick={() => setHide(true)}>Show</button>
      </div>
      {hide ? (
        <>
          {filters.map(({ id, title, body }) => {
            return (
              <Card className="accordion-item">
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    justifyContent: "space-between"
                  }}
                  onClick={() => setIsActive(!isActive)}
                >
                  <div>{title}</div>
                  <div>{isActive ? "-" : "+"}</div>
                </div>
                {isActive && <div className="accordion-content">{body}</div>}
              </Card>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Search;
