import "./styles/tailwind.css";
import "./App.css";

import { FC, useEffect } from "react"; // Alias for FunctionComponent
import { RouterProvider, createBrowserRouter } from "react-router-dom";

type AppProps = { router: ReturnType<typeof createBrowserRouter> };

const App: FC<AppProps> = ({ router }) => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    // fullscreen set telegram app
    tg.expand();

    console.log(tg.initDataUnsafe.user);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
