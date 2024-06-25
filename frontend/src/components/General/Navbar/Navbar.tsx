import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const [state, setState] = React.useState<{ tab: number }>({
        tab: localStorage.getItem("selectedTab") !== null
            ? parseInt(localStorage.getItem("selectedTab") as string, 10)
            : 0,
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setState({ tab: newValue });
        localStorage.setItem("selectedTab", String(newValue));
        newValue === 0 ? window.location.href = "/" : window.location.href = "/favourites";
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
                            style={{ float: "right", marginRight: "30px"}}
                        >
                            <Tab
                                label={<span className={state.tab === 0 ? classes.tabSelected : classes.tab}>Search</span>}
                            />
                            <Tab
                                label={<span className={state.tab === 1 ? classes.tabSelected : classes.tab}>Favourites</span>}
                            />
                        </Tabs>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default Navbar;
