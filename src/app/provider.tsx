import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";

const AppProvider = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default AppProvider;
