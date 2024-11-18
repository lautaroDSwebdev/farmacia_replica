import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "../components/SectionsHome/homepage/HomePage";
import Filter from "../components/filter/Filter";


const App = lazy(() => import("../App"));
const Dermocosmetica = lazy(
  () => import("../components/dermocosmetica/Dermocosmetica")
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
        path: "/Categoria de productos",
        element: <Filter />,
        children: [
          {
            path: "/Categoria de productos/Dermocosmetica",
            element: (
              <Suspense
                fallback={
                  <div className="text-[3rem] flex justify-center">
                    Carcando Categoria de productos
                  </div>
                }
              >
                <Dermocosmetica  />
              </Suspense>
            ),
          },
          {
            path: "/Categoria de productos/Cuidado de Piel",
            element: "Cuidado de piel",
          },
          {
            path: "/Categoria de productos/Maquillaje",
            element: "Maquillaje",
          },
          {
            path: "/Categoria de productos/Perfumerias y Fragancias",
            element: "Perfumerias y fragancias",
          },
          {
            path: "/Categoria de productos/Superofertas",
            element: "Superofertas",
          },
        ],
      },
    ],
  },
]);

export default router;
