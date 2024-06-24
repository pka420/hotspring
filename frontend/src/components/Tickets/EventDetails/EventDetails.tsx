import React from "react";
import classes from "./EventDetails.module.css";
import {
    Container,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import GeneralDetails from "./GeneralDetails";
import VenueDetails from "./VenueDetails";

const EventDetails = (data: any) => {
    const [currentTab, setCurrentTab] = React.useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const handleFavouriteClick = (event: React.SyntheticEvent) => {
        console.log("clicked favorite");
    };

    return (
        <>
            <Container component="main" maxWidth="md">
                <div className={classes.title}>
                    <Typography variant="h4" p={5}>
                        <strong>{data.data.name}</strong>
                    </Typography>
                    <IconButton
                        onClick={handleFavouriteClick}
                        className={classes.favouriteIcon}
                    >
                        <FavoriteBorderIcon
                            style={{
                                color: "#f44336",
                                backgroundColor: "#ffffff",
                            }}
                        />
                    </IconButton>
                </div>

                <Tabs
                    onChange={handleChange}
                    value={currentTab}
                    aria-label="event details tabs"
                    className={classes.tabs}
                    centered
                >
                    <Tab label="Events" className={classes.tab} />
                    <Tab label="Venue" className={classes.tab} />
                </Tabs>

                {currentTab === 0
                    ? <GeneralDetails data={data.data} />
                    : <VenueDetails data={data.data._embedded.venues[0]} />}
            </Container>
        </>
    );
};

export default EventDetails;
