import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault;

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        user
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // '
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={user.username}
            placeholder="userName"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="text"
            value={user.password}
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
