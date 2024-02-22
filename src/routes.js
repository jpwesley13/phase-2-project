import Home from "./pages/Home";
import Monster from "./pages/Monster";
import Series from "./pages/Series";
import Travel from "./pages/Travel";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/monster/:id",
        element: <Monster />,
        errorElement: <ErrorPage />
    },
    {
        path: "/series",
        element: <Series />,
        errorElement: <ErrorPage />
    },
    {
        path: "/travel",
        element: <Travel />,
        errorElement: <ErrorPage />
    }
];

export default routes;