import React from "react";
import classes from "./EventDetails.module.css";
import { Container, Tab, Tabs, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createFavourite, deleteFavourite } from "../../../store/ticketSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import GeneralDetails from "./GeneralDetails";
import VenueDetails from "./VenueDetails";

const genreTypes = ["segment", "genre", "subGenre", "type", "subType"];

interface EventListProps {
    data: any;
    fetchEvents: () => void;
}

const EventDetails: React.FC<EventListProps> = ({ data, fetchEvents }) => {
    const dispatch: AppDispatch = useDispatch();
    const [currentTab, setCurrentTab] = React.useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };
    const classifications = data?.classifications || null;

    let genres = [];
    for (let i = 0; i < genreTypes.length; i++) {
        try {
            const genre = classifications[0][genreTypes[i]].name;
            if (genre.toLowerCase() !== "undefined") {
                genres.push(genre);
            }
        } catch (error) {
            //console.log(error);
        }
    }
    const genreString = genres.join(" | ");

    const favourite = data.favourite;

    const handleFavouriteClick = (event: React.SyntheticEvent) => {
        if (favourite) {
            dispatch(deleteFavourite(data.id)).unwrap().then(() =>
                fetchEvents()
            ).catch((error) => console.log(error));
        }
        const body = {
            event_id: data.id,
            name: data.name,
            date: data.dates.start.localDate,
            category: genreString,
            venue: data._embedded.venues[0].name,
        };
        dispatch(createFavourite(body)).unwrap().then(() => fetchEvents())
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Container component="main" maxWidth="md">
                <div className={classes.title}>
                    <Typography variant="h4" p={5}>
                        <strong>{data.name}</strong>
                    </Typography>
                    <IconButton
                        onClick={handleFavouriteClick}
                        className={classes.favouriteIcon}
                    >
                        {favourite
                            ? (
                                <FavoriteIcon
                                    style={{
                                        backgroundColor: "#fff",
                                        color: "#f44336",
                                    }}
                                />
                            )
                            : (
                                <FavoriteBorderIcon
                                    style={{
                                        backgroundColor: "#fff",
                                        color: "#f44336",
                                    }}
                                />
                            )}
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
                    ? <GeneralDetails data={data} genreString={genreString} />
                    : (
                        <VenueDetails
                            data={data._embedded.venues[0]}
                            genreString={genreString}
                        />
                    )}
            </Container>
        </>
    );
};

export default EventDetails;
