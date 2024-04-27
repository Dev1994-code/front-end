import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Admin,
  About,
  Login,
  Register,
  CreatePackage,
  DeletePackage,
  EditPackage,
  TourGuider,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createpackage",
    element: <CreatePackage />,
  },
  {
    path: "/editpackage",
    element: <EditPackage />,
  },
  {
    path: "/deletepackage",
    element: <DeletePackage />,
  },
  {
    path: "/tourguider",
    element: <TourGuider />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
