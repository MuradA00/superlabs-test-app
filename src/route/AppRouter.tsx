import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { ShakesPage } from "../pages/ShakesPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<ShakesPage />} />
    </Routes>
  );
};