import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import PostsList from "./posts/PostsList";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
