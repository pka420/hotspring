import React from "react";
import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/General/Navbar/Navbar";
import Footer from "./components/General/Footer/Footer";
import NotFound from "./components/General/NotFound/NotFound";
import Favourites from "./components/Tickets/Favourites/Favourites";
import Form from "./components/Tickets/SearchForm/Form";
import NotificationBar from "./components/General/Notification/Notification";
import { getFavourites } from "./store/ticketSlice";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

const FavouritesLoader = async () => {
    const resp = store.dispatch(getFavourites());
    return defer({
        favourites: await resp,
    });
};

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Form />,
            id: "root",
            errorElement: <NotFound />,
        },
        {
            path: "/events",
            element: <Form />,
            errorElement: <NotFound />,
        },
        {
            path: "/favourites",
            loader: () => FavouritesLoader(),
            element: <Favourites />,
        },
        { path: "*", element: <NotFound /> },
    ]);

    return (
        <>
            <CssBaseline />
            <Provider store={store}>
                <div className="background-container">
                    <Navbar />
                    <NotificationBar />
                    <RouterProvider router={router} />
                    <Footer />
                </div>
            </Provider>
        </>
    );
}

export default App;
