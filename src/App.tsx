import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/carts";
import { Layout } from "./components/layout";
import { NotFound } from "./pages/notFound";
import { Dateil } from "./pages/detail"


const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/product/:id",
        element: <Dateil />
      },
      {
        path: "*",
        element: <NotFound />
      }

    ]

  }
])

export {routes}
