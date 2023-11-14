import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './main.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
// import {UserProvider} from "./contexts/user.context";
import {CategoriesProvider} from "./contexts/categories.context";
import {CartProvider} from "./contexts/cart.contex";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<UserProvider>*/}
                <CategoriesProvider>
                    <CartProvider>
                        <RouterProvider router={router}/>
                    </CartProvider>
                </CategoriesProvider>
            {/*</UserProvider>*/}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
