// import './App.css';

import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PaymentSuccessful from "./components/PaymentSuccessful/PaymentSuccessful";
import About from "./components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <Home/>
      )
    },
    {
      path:"gallery",
      element:(
        <Gallery/>
      )
    },
    {
     path:"paymentsuccessful",
     element:(
      <PaymentSuccessful/>
     )
    },
    {
     path:"about",
     element:(
      <About/>
     )
    }
  ])
  return (
    <>
    <RouterProvider router={router}>
      
      </RouterProvider>

    </>
  );
}

export default App;
