import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./component/Nav.jsx";
import Regestration from "./component/Regestration.jsx";
import Display_data from "./component/Display_data.jsx";

const router = createBrowserRouter([
  {path:"/",element:<App></App>,
    children:[
      {path:"/",element:<Regestration></Regestration>},
      {path:"//:id",element:<Regestration></Regestration>},
      {path:"/data",element:<Display_data></Display_data>}
    ]
  }

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>

        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
