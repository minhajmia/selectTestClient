import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Router";

function App({ children }) {
  return (
    <div className="App-container">
      <RouterProvider router={router}>{children}</RouterProvider>
    </div>
  );
}

export default App;
