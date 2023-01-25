import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import PostsList from "./posts/PostsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <PostsList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
