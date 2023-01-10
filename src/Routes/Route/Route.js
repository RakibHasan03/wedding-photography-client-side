import Cart from "../../components/Cart/Cart";
import AddService from "../../components/Pages/AddService/AddService";
import Blog from "../../components/Pages/Blog/Blog";
import CheckOut from "../../components/Pages/CheckOut/CheckOut";
import DetailsPage from "../../components/Pages/DetailsPage/DetailsPage";
import ReviewFrom from "../../components/Pages/DetailsPage/ReviewFrom";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import MyReview from "../../components/Pages/MyReview/MyReview";
import ReviewUpdate from "../../components/Pages/MyReview/ReviewUpdate";
import Register from "../../components/Pages/Register/Register";
import Services from "../../components/Pages/Services/Services";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute";

const { createBrowserRouter } = require("react-router-dom");

 const router = createBrowserRouter([
    {
         path: '/',
         element: <Main></Main>,
         errorElement:<ErrorPage></ErrorPage>,
         children: [
             {
                 path: '/',
                //  loader: () => fetch('http://localhost:5000/service'),
                 element:<Home></Home>
             },
             {
                 path: '/home',
                //  loader: () => fetch('http://localhost:5000/service'),
                 element:<Home></Home>
             },
            
             {
                 path: '/services',
                //  loader: () => fetch('http://localhost:5000/services'),
                 element: <Services></Services>
                
             },
             {
                 path: '/service/:id',
                 loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                 element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
             },
             {
                 path: '/addService',
                 element: <AdminRoute><AddService></AddService></AdminRoute>
             },
             {
                 path: '/myReview',
                 element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
             },
             {
                 path: '/blog',
                 element: <Blog></Blog>
             },
             {
                 path: '/login',
                 element:<Login></Login>
             },
             {
                 path: '/register',
                 element:<Register></Register>
             },
             {
                 path: '/update/:id',
                 loader: ({ params }) => fetch(`http://localhost:5000/myReview/${params.id}`),
                 element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>
             },

             {
                 path: '/review',
                 element:<PrivateRoute><ReviewFrom></ReviewFrom></PrivateRoute>
                 
             },
             {
                 path: '/cart',
                 element: <PrivateRoute><Cart></Cart></PrivateRoute>
             },
             {
                 path: '/checkOut',
                 element: <CheckOut></CheckOut>
                 
             }
        ]
        
    }
 ])


export default router;