import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import PostList from "./component/post-list";
import UserList from "./component/user";
import PostsOne from "./component/posts/PostsOne";
import PostsTwo from "./component/posts/PostsTwo";
import PostsThree from "./component/posts/PostsThree";
import UsersOne from "./component/users/UsersOne";
import UsersTwo from "./component/users/UsersTwo";
import UsersThree from "./component/users/UsersThree";

function App() {
  return (
    <>
      <h1>Hello RTK Query</h1>
      <BrowserRouter>
        <nav style={{display: "flex", alignItems: "center", gap: "1rem"}}>
          <Link to={"/"}>Home</Link>
          <Link to={"/posts"}>posts</Link>
          <Link to={"/post-one"}>posts one</Link>
          <Link to={"/post-two"}>posts two</Link>
          <Link to={"/post-three"}>posts three</Link>
          <Link to={"/users"}>user</Link>
          <Link to={"/users-one"}>user one</Link>
          <Link to={"/users-two"}>user two</Link>
          <Link to={"/users-three"}>user three</Link>
        </nav>
        <Routes>
          <Route path="/" element={<>Home Page</>} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/post-one" element={<PostsOne />} />
          <Route path="/post-two" element={<PostsTwo />} />
          <Route path="/post-three" element={<PostsThree />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users-one" element={<UsersOne />} />
          <Route path="/users-two" element={<UsersTwo />} />
          <Route path="/users-three" element={<UsersThree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
