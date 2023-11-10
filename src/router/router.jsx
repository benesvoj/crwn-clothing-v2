import {createBrowserRouter} from "react-router-dom";
import App from "../pages/app/App";
import {Shop} from "../pages/shop/shop";
import {Layout} from "../components/layout/layout";
import {Authentication} from "../pages/authentication/authentication";
import {urls} from "../utils/urls";
import {Checkout} from "../pages/checkout/checkout";
import {Category} from "../pages/category/category";
import ErrorPage from "../pages/errorPage/errorPage";

export const router = createBrowserRouter([
        {
            path: urls.home,
            element: <Layout/>,
            indexRoute: true,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: urls.home,
                    element: <App/>,
                },
                {
                    path: urls.shop,
                    element: <Shop/>
                },
                {
                    path: `${urls.shop}/:category`,
                    element: <Category/>
                },
                {
                    path: urls.authentication,
                    element: <Authentication/>
                },
                {
                    path: urls.checkout,
                    element: <Checkout/>
                }
            ]
        },
    ])
;