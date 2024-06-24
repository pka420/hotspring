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
    Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { formatDate } from "../../Utils/utils";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = (props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return (
        <Link
            component="button"
            variant="body2"
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            {...other}
        >
            Show More
            <ExpandMoreIcon className={classes.expandIcon} />
        </Link>
    );
};

const CollapseMore = (props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return (
        <Link
            component="button"
            variant="body2"
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            {...other}
        >
            Show Less
            <ExpandLessIcon className={classes.expandIcon} />
        </Link>
    );
};

const EventDetails = (data: any) => {
    const [expanded, setExpanded] = React.useState<number>(0);
    //expanded = 0 means none.
    // 1 for open hours, 2 for general and 3 for child.
    const handleExpandClick = (newValue: number) => {
        setExpanded(newValue);
    };

    console.log(data.data);
    const boxOfficeInfo = data.data?.boxOfficeInfo ||
        {
            phoneNumberDetail: "No Phone Number Available",
            openHoursDetail: "No Open Hours Available",
        };

    const generalInfo = data.data?.generalInfo ||
        {
            generalRule: "No General Rule Available",
            childRule: "No Child Rule Available",
        };

    return (
        <>
            <Container component="main" maxWidth="md">
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        direction="column"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6">
                            <strong>Name</strong>
                        </Typography>
                        <Typography variant="body1">
                            {data.data.name}
                        </Typography>
                        <Typography variant="h6">
                            <strong>Adress</strong>
                        </Typography>
                        <Typography variant="body1">
                            {data.data.address.line1 !== undefined && (
                                <span>
                                    {data.data.address.line1 + ", "}
                                </span>
                            )}
                            {data.data.city !== undefined && (
                                <span>
                                    {data.data.city.name + ", "}
                                </span>
                            )}
                            {data.data.country !== undefined && (
                                <span>
                                    {data.data.country.countryCode}
                                </span>
                            )}
                        </Typography>
                        <Typography variant="h6">
                            <strong>Phone Number</strong>
                        </Typography>
                        <Typography variant="body1">
                            {boxOfficeInfo.phoneNumberDetail}
                        </Typography>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h6">
                            <strong>Open Hours</strong>
                        </Typography>
                        <Typography variant="body1">
                            {boxOfficeInfo.openHoursDetail.length > 100
                                ? (
                                    <>
                                        {expanded !== 1 &&
                                            (
                                                <>
                                                    {boxOfficeInfo
                                                        .openHoursDetail.substr(
                                                            0,
                                                            100,
                                                        )}
                                                    <ExpandMore
                                                        expand={expanded === 1}
                                                        onClick={() =>
                                                            handleExpandClick(
                                                                1,
                                                            )}
                                                    />
                                                </>
                                            )}
                                        <Collapse
                                            in={expanded === 1}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            {boxOfficeInfo.openHoursDetail}
                                            <CollapseMore
                                                expand={expanded === 1}
                                                onClick={() =>
                                                    handleExpandClick(0)}
                                            />
                                        </Collapse>
                                    </>
                                )
                                : (
                                    <>
                                        {boxOfficeInfo.openHoursDetail}
                                    </>
                                )}
                        </Typography>
                        <Typography variant="h6">
                            <strong>General Rule</strong>
                        </Typography>
                        <Typography variant="body1">
                            {generalInfo.generalRule.length > 100
                                ? (
                                    <>
                                        {expanded !== 2 &&
                                            (
                                                <>
                                                    {generalInfo
                                                        .generalRule.substr(
                                                            0,
                                                            100,
                                                        )}
                                                    <ExpandMore
                                                        expand={expanded === 2}
                                                        onClick={() =>
                                                            handleExpandClick(
                                                                2,
                                                            )}
                                                    />
                                                </>
                                            )}
                                        <Collapse
                                            in={expanded === 2}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            {generalInfo.generalRule}
                                            <CollapseMore
                                                expand={expanded === 2}
                                                onClick={() =>
                                                    handleExpandClick(0)}
                                            />
                                        </Collapse>
                                    </>
                                )
                                : (
                                    <>
                                        {generalInfo.generalRule}
                                    </>
                                )}
                        </Typography>
                        <Typography variant="h6">
                            <strong>Child Rule</strong>
                        </Typography>
                        <Typography variant="body1">
                            {generalInfo.childRule.length > 100
                                ? (
                                    <>
                                        {expanded !== 3 &&
                                            (
                                                <>
                                                    {generalInfo
                                                        .childRule.substr(
                                                            0,
                                                            100,
                                                        )}
                                                    <ExpandMore
                                                        expand={expanded === 3}
                                                        onClick={() =>
                                                            handleExpandClick(
                                                                3,
                                                            )}
                                                    />
                                                </>
                                            )}
                                        <Collapse
                                            in={expanded === 3}
                                            timeout="auto"
                                            unmountOnExit
                                        >
                                            {generalInfo.childRule}
                                            <CollapseMore
                                                expand={expanded === 3}
                                                onClick={() =>
                                                    handleExpandClick(0)}
                                            />
                                        </Collapse>
                                    </>
                                )
                                : (
                                    <>
                                        {generalInfo.childRule}
                                    </>
                                )}
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

export default EventDetails;
