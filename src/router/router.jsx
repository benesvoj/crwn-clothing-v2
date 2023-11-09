import {createBrowserRouter} from "react-router-dom";
import App from "../pages/app/App";
import {Shop} from "../pages/shop/shop";
import {Layout} from "../components/layout/layout";
import {Authentication} from "../pages/authentication/authentication";
import {urls} from "../utils/urls";
import {Checkout} from "../pages/checkout/checkout";
import {Category} from "../pages/category/category";

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
                element: <Shop />,
                children: [
                    {
                        path: ':category',
                        element: <Category />
                    }
                ]
            },
            {
                path: urls.authentication,
                element: <Authentication />
            },
            {
              path: urls.checkout,
              element: <Checkout />
            }
        ]
    },
]);