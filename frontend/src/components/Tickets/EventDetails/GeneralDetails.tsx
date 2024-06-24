import React from "react";
import classes from "./EventDetails.module.css";
import {
    Button,
    Chip,
    Collapse,
    Container,
    Divider,
    Link,
    Stack,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { formatDate } from "../../Utils/utils";

const GeneralDetails = (data: any) => {
    console.log(data);
    const externalLinks = data.data?._embedded?.attractions[0]
        ?.externalLinks ||
        {
            facebook: null,
            twitter: null,
            instagram: null,
        };

    const seatmap = data.data?.seatmap || null;

    const classifications = data.data?.classifications || null;

    return (
        <>
            <Container component="main" maxWidth="md">
                <Stack
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        spacing={1}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6">
                            <strong>Date</strong>
                        </Typography>
                        <Typography variant="body1">
                            {formatDate(
                                data.data.dates.start.dateTime,
                            )}
                        </Typography>
                        <Typography variant="h6">
                            <strong>Artist/Team</strong>
                        </Typography>
                        <Typography variant="body1">
                            <Stack
                                direction="row"
                                divider={
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                    />
                                }
                                spacing={2}
                            >
                                {data.data._embedded.attractions !==
                                        undefined &&
                                    data.data._embedded.attractions
                                        .map(
                                            (
                                                attraction: any,
                                            ) => (
                                                <span
                                                    key={attraction
                                                        .id}
                                                >
                                                    {attraction
                                                        .name}
                                                </span>
                                            ),
                                        )}
                            </Stack>
                        </Typography>
                        <Typography variant="h6">
                            <strong>Venue</strong>
                        </Typography>
                        <Typography variant="body1">
                            {data.data._embedded.venues.map((
                                venue: any,
                            ) => (
                                <span key={venue.id}>
                                    {venue.name}
                                </span>
                            ))}
                        </Typography>
                        <Typography variant="h6">
                            <strong>Genres</strong>
                        </Typography>
                        <Typography variant="body1">
                            {classifications !== null ?
                            {classifications.forEach((
                                classification: any,
                            ) => (
                                <span key={classification.?.id}>
                                    {classification.?.name}
                                </span>
                            ))}
                            : "No genres available"
                            }
                        </Typography>

                        <Typography variant="h6">
                            <strong>Price Ranges</strong>
                        </Typography>
                        <Typography variant="body1">
                            {data.data.priceRanges !== undefined &&
                                data.data.priceRanges.map(
                                    (priceRange: any) => (
                                        <span key={priceRange.id}>
                                            {priceRange.min} - {priceRange.max}
                                            {" " +
                                                priceRange.currency}
                                        </span>
                                    ),
                                )}
                        </Typography>

                        <Typography variant="h6">
                            <strong>Ticket Status</strong>
                        </Typography>
                        {data.data.dates.status.code
                                .toLowerCase() === "onsale"
                            ? (
                                <Chip
                                    label="On Sale"
                                    style={{
                                        backgroundColor: "#4caf50",
                                    }}
                                />
                            )
                            : data.data.dates.status.code
                                    .toLowerCase() ===
                                    "offsale"
                            ? (
                                <Chip
                                    label="Off Sale"
                                    style={{
                                        backgroundColor: "#f44336",
                                    }}
                                />
                            )
                            : data.data.dates.status.code
                                    .toLowerCase() ===
                                    "cancelled"
                            ? (
                                <Chip
                                    label="Cancelled"
                                    style={{
                                        backgroundColor: "#040504",
                                        color: "#ffffff",
                                    }}
                                />
                            )
                            : data.data.dates.status.code
                                    .toLowerCase() ===
                                    "postponed"
                            ? (
                                <Chip
                                    label="Postponed"
                                    style={{
                                        backgroundColor: "#ff9800",
                                    }}
                                />
                            )
                            : (
                                <Chip
                                    label="Rescheduled"
                                    style={{
                                        backgroundColor: "#ff9800",
                                    }}
                                />
                            )}
                        <Typography variant="h6">
                            <strong>Buy Tickets At</strong>
                        </Typography>
                        <a
                            href={data.data.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ticketmaster
                        </a>
                        <Stack direction="row" spacing={2}>
                            {externalLinks !== null && (
                            <Typography variant="h6">
                                <strong>Share On:</strong>
                            </Typography>
                            )}

                            {externalLinks.facebook !== null && (
                            <a
                                href={externalLinks.facebook[0].url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FacebookIcon />
                            </a>
                            )}
                            {externalLinks.twitter !== null && (
                                    <a
                                        href={externalLinks.twitter[0].url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <TwitterIcon />
                                    </a>
                                )}
                            {externalLinks.instagram !== null && (
                                    <a
                                        href={externalLinks.instagram[0].url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <InstagramIcon />
                                    </a>
                                )}
                        </Stack>
                    </Stack>
                    <div>
                        {seatmap !== undefined
                            ? (
                                <img
                                    src={data.data.seatmap
                                        .staticUrl}
                                    alt="seatmap"
                                    className={classes.seatmap}
                                />
                            )
                            : <strong>No Seatmap available</strong>}
                    </div>
                </Stack>
            </Container>
        </>
    );
};

export default GeneralDetails;
