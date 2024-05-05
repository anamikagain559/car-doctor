import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../SignUp/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element:<Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>
        } ,{
          path: 'signup', 
          element: <Signup></Signup>
      },
    ]
  },
]);

export default router;
