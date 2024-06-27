import React from "react";
import classes from "./EventDetails.module.css";
import {
    Chip,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { formatDate } from "../../Utils/utils";
import Image from "../../General/Image/Image";

interface GeneralDetailsProps {
    data: any;
    genreString: string;
}

const GeneralDetails: React.FC<GeneralDetailsProps> = (
    { data, genreString },
) => {
    const attractions = data?._embedded?.attractions || null;

    const externalLinks = attractions !== null && attractions.length !== 0
        ? attractions[0].externalLinks
        : null;

    let socialLinks = {
        facebook: null,
        twitter: null,
        instagram: null,
    };

    if (externalLinks !== null) {
        try {
            socialLinks.facebook = externalLinks.facebook[0].url;
        } catch (error) {
            //console.log(error);
        }
        try {
            socialLinks.twitter = externalLinks.twitter[0].url;
        } catch (error) {
            //console.log(error);
        }
        try {
            socialLinks.instagram = externalLinks.instagram[0].url;
        } catch (error) {
            // console.log(error);
        }
    }

    const seatmap = data?.seatmap || { staticUrl: null };

    let attractionString = ""
    if (attractions !== null) {
        attractions.forEach((attraction: any) => {
            attractionString += attraction.name + " | ";
        });
        attractionString = attractionString.slice(0, -3);
    }

    return (
        <>
            <Grid
                spacing={3}
                container
            >
                <Grid item xs={4} >
                    <Typography variant="h6">
                        <strong>Date</strong>
                    </Typography>
                    <Typography variant="body1">
                        {formatDate(
                            data.dates.start.dateTime,
                        )}
                    </Typography>
                    <Typography variant="h6">
                        <strong>Artist/Team</strong>
                    </Typography>
                    <Typography variant="body1">
                        {attractionString}
                    </Typography>
                    <Typography variant="h6">
                        <strong>Venue</strong>
                    </Typography>
                    <Typography variant="body1">
                        {data._embedded.venues.map((
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
                        {genreString}
                    </Typography>
                    <Typography variant="h6">
                        <strong>Price Ranges</strong>
                    </Typography>
                    <Typography variant="body1">
                        {data.priceRanges !== undefined &&
                            data.priceRanges.map(
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
                    {data.dates.status.code
                            .toLowerCase() === "onsale"
                        ? (
                            <Chip
                                label="On Sale"
                                style={{
                                    backgroundColor: "#4caf50",
                                }}
                            />
                        )
                        : data.dates.status.code
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
                        : data.dates.status.code
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
                        : data.dates.status.code
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
                        href={data.url}
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

                        {socialLinks.facebook !== null && (
                            <a
                                href={socialLinks.facebook}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FacebookIcon />
                            </a>
                        )}
                        {socialLinks.twitter !== null && (
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterIcon />
                            </a>
                        )}
                        {socialLinks.instagram !== null && (
                            <a
                                href={externalLinks.instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                        )}
                    </Stack>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <Image
                            src={seatmap.staticUrl}
                            alt="Seat Map"
                            width="512px"
                            height="384px"
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default GeneralDetails;
