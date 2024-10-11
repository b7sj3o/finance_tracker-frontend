import { NavBar } from "./components";
import {
  LoginPage,
  RegisterPage,
  HomePage,
  AddTransaction,
  InsightPage,
  TransactionsPage,
} from "./pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/add-transaction",
        element: <AddTransaction />,
      },
      {
        path: "/insight",
        element: <InsightPage />,
      },
      {
        path: "/transactions",
        element: <TransactionsPage />,
      },
    ],
  },
]);
