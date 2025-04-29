import Data from "./Components/Data/Data";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import AddData from "./Components/Data/AddData/AddData";
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from './Components/Users/Users';
import Orders from "./Components/Orders/Orders";
import Products from "./Components/Products/Products";
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([{path : '/' , element : <Layout /> , children : [
    {path : 'users', element : <Users /> }, 
    {path : 'orders', element : <Orders /> }, 
    {path : 'products', element : <Products /> }, 
    {path : 'home', element : <Home /> }, 
    {path : '/', element : <Home /> }, 
    {path : 'addProduct', element : <AddData /> }, 
  ]}])
  return <>  
  {/* <Data /> */}
  {/* <AddData /> */}
  {/* <Layout /> */}
  
  <RouterProvider router={router}/>
  </>
}

export default App;
