import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../layout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyChart from "../Pages/MyChart/MyChart";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import BrandAdd from "../component/Brands/BrandAdd";
import Products from "../Pages/Products/Products";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Myproducts from "../Pages/MyProducts/Myproducts";
import AddProductBann from "../component/ProductBanner/AddProductBann";
import ProductBanner from "../component/ProductBanner/ProductBanner";
import ProductDetails from "../Pages/Products/ProductDetails";
import UpdateProduct from "../Pages/AddProduct/UpdateProduct";
import MyChartCard from "../Pages/MyChart/MyChartCard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://assignment-10-server-three-rho.vercel.app/brands')
      },
      {
        path: '/addproduct',
        element: <PrivetRoutes><AddProduct /></PrivetRoutes>,
      },
      {
        path: '/mycart',
        element: <PrivetRoutes><MyChart /></PrivetRoutes>,
        loader: () => fetch(' https://assignment-10-server-three-rho.vercel.app/addproduct')
      },
      {
        path: '/mycart',
        element: <MyChartCard/>,
        loader: () => fetch(' https://assignment-10-server-three-rho.vercel.app/addproduct')
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/brandadd',
        element: <BrandAdd />
      },
      {
        path: '/products/:id',
        element: <Products />,
        loader: () => fetch(' https://assignment-10-server-three-rho.vercel.app/product')
      },
      {
        path: '/myproducts/:id',
        element: <Myproducts />,
        loader: () => fetch(' https://assignment-10-server-three-rho.vercel.app/addproduct')
      },
      {
        path: '/addproductbann',
        element: <AddProductBann />,
      },
      {
        path: '/productBann',
        element: <ProductBanner/>,
        loader: () => fetch(' https://assignment-10-server-three-rho.vercel.app/addproductbann')
      },
      {
        path: '/product/:id',
        element: <PrivetRoutes><ProductDetails/></PrivetRoutes>,
        loader: ({params}) => fetch(` https://assignment-10-server-three-rho.vercel.app/product/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivetRoutes><UpdateProduct/></PrivetRoutes>,
        loader: ({params}) => fetch(` https://assignment-10-server-three-rho.vercel.app/product/${params.id}`)
      },
      

    ]
  },
]);