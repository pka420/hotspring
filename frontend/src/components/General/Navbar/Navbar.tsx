import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import classes from "./Navbar.module.css";

import Form from "../../Tickets/Form";
import Favourites from "../../Tickets/Favourites";

const Navbar = () => {
    const [state, setState] = React.useState<{ tab: number }>({
        tab: localStorage.getItem("selectedTab") !== null
            ? parseInt(localStorage.getItem("selectedTab") as string, 10)
            : 0,
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setState({ tab: newValue });
        localStorage.setItem("selectedTab", String(newValue));
    };

    return (
        <>
            <div >
                <div className={classes.navbar}>
                    <Box sx={{ width: "100%", float: "right" }}>
                        <Tabs
                            onChange={handleChange}
                            value={state.tab}
                            aria-label="navbar"
                            className={classes.tabs}
                        >
                            <Tab label="Search" className={classes.tab} />
                            <Tab label="Favourites" className={classes.tab} />
                        </Tabs>
                    </Box>
                </div>
                {state.tab === 0 ? <Form /> : <Favourites />}
            </div>
        </>
    );
};

export default Navbar;
