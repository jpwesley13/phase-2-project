import App from "./App";
import Home from "./pages/Home";
import Monster from "./pages/Monster";
import Series from "./pages/Series";
import Travel from "./pages/Travel";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/monster/:id",
                element: <Monster />,
            },
            {
                path: "/series",
                element: <Series />,
            },
            {
                path: "/travel",
                element: <Travel />,
            }
        ]
    }
];

export default routes;