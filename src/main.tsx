import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.tsx";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { ContextoProveedor } from "./context/ContextoProveedor.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextoProveedor>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ContextoProveedor>
);
