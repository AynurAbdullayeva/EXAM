import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTS } from "./router/routes";
const router = createBrowserRouter(ROUTS)
function App() {
  return (
    <>
  <RouterProvider router={router}/>
    </>
  );
}

export default App;
