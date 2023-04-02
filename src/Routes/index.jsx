import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/pages/Home";
import Bootcamp from "../components/pages/Bootcamp";
import Reservation from "../components/pages/Reservation";
import Contact from "../components/pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/bootcamp" exact element={<Bootcamp />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/sign" element={< Sign/>}/> */}
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
