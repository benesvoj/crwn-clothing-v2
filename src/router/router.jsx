import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Shop} from "../pages/shop/shop";
import {Layout} from "../components/layout/layout";
import {Authentication} from "../pages/authentication/authentication";
import {urls} from "../utils/urls";

export const router = createBrowserRouter([
    {
        path: urls.home,
        element: <Layout/>,
        children: [
            {
                path: urls.home,
                element: <App />,
                indexRoute: true
            },
            {
                path: urls.shop,
                element: <Shop />
            },
            {
                path: urls.authentication,
                element: <Authentication />
            }
        ]
    },
]);