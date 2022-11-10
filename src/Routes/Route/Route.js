import AddService from "../../components/Pages/AddService/AddService";
import Blog from "../../components/Pages/Blog/Blog";
import DetailsPage from "../../components/Pages/DetailsPage/DetailsPage";
import ReviewFrom from "../../components/Pages/DetailsPage/ReviewFrom";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import MyReview from "../../components/Pages/MyReview/MyReview";
import ReviewUpdate from "../../components/Pages/MyReview/ReviewUpdate";
import Register from "../../components/Pages/Register/Register";
import Services from "../../components/Pages/Services/Services";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

 const router = createBrowserRouter([
    {
         path: '/',
         element: <Main></Main>,
         errorElement: <h1>404 not found</h1>,
         children: [
             {
                 path: '/',
                 loader: () => fetch('http://localhost:5000/service'),
                 element:<Home></Home>
             },
             {
                 path: '/services',
                 loader: () => fetch('http://localhost:5000/services'),
                 element: <Services></Services>
                
             },
             {
                 path: '/service/:id',
                 loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                 element:<DetailsPage></DetailsPage>
             },
             {
                 path: '/addService',
                 element: <AddService></AddService>
             },
             {
                 path: '/myReview',
                 element:<MyReview></MyReview>
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
                 element:<ReviewUpdate></ReviewUpdate>
             }
            //  {
            //      path: '/review',
            //      element:<PrivateRoute><ReviewFrom></ReviewFrom></PrivateRoute>
                 
            //  }
        ]
        
    }
 ])


export default router;