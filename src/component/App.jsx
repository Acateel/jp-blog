import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./albums/Album";
import AlbumsList from "./albums/AlbumsList";
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
        path: "/posts/:id",
        element: <PostShow />,
      },
      {
        path: "/albums",
        element: <AlbumsList />,
      },
      {
        path: "/albums/:id",
        element: <Album />,
      },
      {
        path: "/users",
        element: <UsersList />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
