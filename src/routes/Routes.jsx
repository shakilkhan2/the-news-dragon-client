import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/news/News";
import LogInLayout from "../layouts/LogInLayout";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Shared/TermsAndConditions/Terms";

const router = createBrowserRouter([
  {
path: "/",
element: <LogInLayout/>,
children: [
  {
    path: "/",
    element: <Navigate to = "/category/0"></Navigate>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Registration/>
  },
  {
    path: "/terms",
    element: <Terms/>
  }
]
  },
  {
    path: "/category",
    element: <Main />,
    children: [
      
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <PrivateRoutes><News /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
  },
]);

export default router;
