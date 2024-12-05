import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Filter from "../components/filter/Filter";
import HomePage from "../components/pages/homepage/HomePage";
import SelectedImgProd from "../components/pages/ProdSelected/SelectedImgProd";
import Maquillaje from "../components/pages/maquillaje/Maquillaje";


const App = lazy(() => import("../App"));
const Dermocosmetica = lazy(
  () => import("../components/pages/dermocosmetica/Dermocosmetica")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="text-[3rem] flex justify-center">Cargando Home..</div>
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/producto/:id",
        element: <SelectedImgProd/>
      },
      {
        path: "/productos",
        element: <Filter />,
        children: [
          {
            path: "/productos/Dermocosmetica",
            element: (
              <Suspense
                fallback={
                  <div className="text-[3rem] flex justify-center">
                    Carcando productos
                  </div>
                }
              >
                <Dermocosmetica  />
              </Suspense>
            ),
          },
          {
            path: "/productos/Maquillaje",
            element: <Maquillaje/>,
          },
          {
            path: "/productos/Cuidado de Piel",
            element: "Cuidado de piel",
          },
          {
            path: "/productos/Perfumerias y Fragancias",
            element: "Perfumerias y fragancias",
          },
          {
            path: "/productos/Superofertas",
            element: "Superofertas",
          },
        ],
      },
    ],
  },
]);

export default router;
