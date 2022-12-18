import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Tests from "../Components/Tests/Tests";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "tests", element: <Tests /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);
