import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Portofolio from "./Components/Portofolio/Portofolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Notfound from "./Components/Notfound/Notfound.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },   
    { path: "about", element: <About /> },
    { path: "portofolio", element: <Portofolio /> } , 
    {path : "contact" , element :  <Contact/>} ,
    {path :"footer" , element : <Footer/>} , 
    {path:'*' , element: <Notfound/>}, 
  ],
}

]);

export default function App() {
  return <RouterProvider router={router} />;
}