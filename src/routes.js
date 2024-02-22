import Home from "./tabs/Home";
import Monster from "./tabs/Monster";
import Series from "./tabs/Series";
import Travel from "./tabs/Travel";
import ErrorPage from "./tabs/ErrorPage";

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