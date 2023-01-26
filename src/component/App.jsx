import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import PostShow from "./posts/PostShow";
import PostsList from "./posts/PostsList";
import User from "./users/User";
import UsersList from "./users/UsersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <PostsList />,
      },
      {
        path: "/users",
        element: <UsersList />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/posts/:id",
        element: <PostShow />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
