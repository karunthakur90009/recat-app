import Main from "./dnd/Main";
import "./styles.css";
import TodoList from "./todo/TodoList";
import Timer from "./timer/Timer";
import Search from "./component/Search";
import ImageG from "./image/ImageG";
import Counter from "./counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="'login" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dnd" element={<Main />} />
        <Route path="/img" element={<ImageG />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/counetr" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
