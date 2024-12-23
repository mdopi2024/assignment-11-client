import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";

import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBooks from "../pages/AddBooks/AddBooks";
import BorrowBooks from "../pages/BorrowBooks/BorrowBooks";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../pages/Update/Update";
import CategoryPage from "../pages/CategoryPage/CategoryPage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/allbooks',
          element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          loader:()=>fetch(`${import.meta.env.VITE_URL}/books`)
        },
        {
          path:'/addbooks',
          element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
          path:'/borrowbooks',
          element:<PrivateRoute><BorrowBooks></BorrowBooks></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader:({params})=>fetch(`${import.meta.env.VITE_URL}/books/${params.id}`)
        },
        {
          path:'/category/:category',
          element:<PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>,
        },
      
      ]
    },
    
  ]);

  export default router