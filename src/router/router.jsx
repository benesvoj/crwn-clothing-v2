import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Shop} from "../components/shop/shop";
import {Layout} from "../components/layout/layout";
import {SignIn} from "../components/signIn/signIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App />,
                indexRoute: true
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "sign-in",
                element: <SignIn />
            }
        ]
    },
]);